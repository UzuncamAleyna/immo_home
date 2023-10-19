import e, { Router } from "express";
import passport from "passport";
import { ObjectId } from "mongodb";
import jwt from "jsonwebtoken";
import { initClient } from "../db/mongo.js";
import { createUserData, hash } from "../middleware/auth/hash.js";

//Initialize MongoDB client and database:
const client = await initClient();
const db = client.db("immo");

const registerRegularRoutes = (app) => {
  app.post("/login", async (req, res) => {
    const email = req.body.email;
    const password = req.body.password;

    // check if user exists in the database
    let user = await db.collection("users").findOne({ email });

    // if not, show error message
    if (!user) {
      return res.status(400).json({ error: "User does not exist" });
    }

    //add salt to password and hash it with the hash function
    let hashPassword = hash(user, password);

    // check if the password is correct
    if (hashPassword !== user.password) {
      return res.status(400).json({ error: "Password is incorrect" });
    }

    // generate a new token for the user
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: process.env.JWT_EXPIRES_IN_HOURS * 60 * 60,
    });

    // delete the password from the user object
    delete user.password;
    delete user.salt;
    delete user.saltParam;

    // send back the user object
    res.json({ token, ...user });
  });

  app.post("/register", async (req, res) => {
    const role = req.body.role;
    const surname = req.body.surname;
    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;

    try {
      // Check if the username already exists
      const existingUser = await db.collection("users").findOne({ email });
      if (existingUser) {
        return res.status(400).json({ error: "Email already exists" });
      }

      // Create a new user
      const newUser = createUserData({ surname, name, role, email, password });

      // Insert the user into the database
      await db.collection("users").insertOne(newUser);

      // Generate a new token for the registered user
      const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRES_IN_HOURS * 60 * 60,
      });

      delete newUser.password;
      delete newUser.salt;
      delete newUser.saltParam;
      res.json({ token, ...newUser });
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  });

  //get all properties
  app.get("/home", async (req, res) => {
    const properties = await db.collection("properties").find().toArray();
    res.json(properties);
  });

  //get all properties for sale
  app.get("/forSale", async (req, res) => {
    const properties = await db
      .collection("properties")
      .find({ state: "For sale" })
      .toArray();
    res.json(properties);
  });

  //get all properties for rent
  app.get("/forRent", async (req, res) => {
    const properties = await db
      .collection("properties")
      .find({ state: "For rent" })
      .toArray();
    res.json(properties);
  });

  //get detail of property
  app.get("/detail/:id", async (req, res) => {
    const id = req.params.id;
    const property = await db.collection("properties").findOne({
      _id: new ObjectId(id),
    });
    //console.log(office);
    res.json(property);
  });

  // get all offices
  app.get("/immoOffices", async (req, res) => {
    const offices = await db.collection("offices").find().toArray();
    res.json(offices);
  });

  //get detail of office
  app.get("/immoOffices/:id", async (req, res) => {
    const id = req.params.id;
    const office = await db.collection("offices").findOne({
      _id: new ObjectId(id),
    });
    //console.log(office);
    res.json(office);
  });

  //get all users in my profile
  app.get("/myProfile", async (req, res) => {
    const users = await db.collection("users").find().toArray();
    res.json(users);
  });

  app.get("/admin", async (req, res) => {
    const properties = await db.collection("properties").find().toArray();
    res.json(properties);
  });

  app.post("/favorites", async (req, res) => {
    const favorite = {
      ...req.body,
    };
    await db.collection("favorites").insertOne(favorite);

    res.json(favorite);
  });

  // update user in personal information
  app.patch("/personalInformation/:id", async (req, res) => {
    const id = req.params.id;
    const user = await db.collection("users").findOne({
      _id: ObjectId(id),
    });

    if (user) {
      const { _id, ...data } = req.body;
      const newData = { ...user, ...data };
      await db.collection("users").replaceOne({ _id: ObjectId(id) }, newData);

      res.json(newData);
    } else {
      res.status(404).json({ error: "Not found" });
    }
  });

  // update password in Change Password
  app.patch("/changePassword/:id", async (req, res) => {
    const id = req.params.id;
    const user = await db.collection("users").findOne({
      _id: ObjectId(id),
    });

    if (user) {
      const { _id, ...data } = req.body;
      const newData = { ...user, ...data };
      await db.collection("users").replaceOne({ _id: ObjectId(id) }, newData);

      res.json(newData);
    } else {
      res.status(404).json({ error: "Not found" });
    }
  });

  // delete user in personal information
  app.delete("/myProfile/:id", async (req, res) => {
    const id = req.params.id;

    await db.collection("users").deleteOne({
      _id: ObjectId(id),
    });

    res.json({});
  });

  // post message from contact in database
  app.post("/detail/:id/message", async (req, res) => {
    const id = req.params.id;
    const message = {
      ...req.body,
    };
    await db.collection("messages").insertOne(message);

    res.json(message);
  });

  // post card to favorites
  app.post("/detail/:id/favorite", async (req, res) => {
    const id = req.params.id;
    const favorite = {
      ...req.body,
    };
    await db.collection("favorites").insertOne(favorite);
    res.json(favorite);
  });
};

const registerAdminRoutes = (app) => {
  const adminRouter = Router();

  adminRouter.use(
    passport.authenticate("jwt", { session: false, failWithError: true })
  );

  adminRouter.post("/students", async (req, res) => {
    const student = {
      image: "https://picsum.photos/200/300",
      ...req.body,
    };

    await db.collection("students").insertOne(student);

    res.json(student);
  });
  // update user in personal information
  adminRouter.patch("/personalInformation/:id", async (req, res) => {
    const id = req.params.id;
    const user = await db.collection("users").findOne({
      _id: ObjectId(id),
    });

    if (user) {
      const { _id, ...data } = req.body;
      const newData = { ...user, ...data };
      await db.collection("users").replaceOne({ _id: ObjectId(id) }, newData);

      res.json(newData);
    } else {
      res.status(404).json({ error: "Not found" });
    }
  });

  adminRouter.get("/students/:id", async (req, res) => {
    const id = req.params.id;
    const student = await db.collection("students").findOne({
      _id: ObjectId(id),
    });

    if (student) {
      res.json(student);
    } else {
      res.status(404).json({ error: "Not found" });
    }
  });

  adminRouter.delete("/students/:id", async (req, res) => {
    const id = req.params.id;

    await db.collection("students").deleteOne({
      _id: ObjectId(id),
    });

    res.json({});
  });

  app.use(adminRouter);
};

const registerRoutes = async (app) => {
  registerRegularRoutes(app);

  registerAdminRoutes(app);

  //// Custom error handler middleware to handle JWT authentication errors
  app.use((err, req, res, next) => {
    if (err.name === "AuthenticationError") {
      res.status(401).json({ error: "Token expired" });
    } else {
      console.log(err);
      res.status(500).json({ error: "Internal Server Error" });
    }
  });
};

export { registerRoutes };
