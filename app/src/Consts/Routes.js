const ROUTES = {
  home: "/home",
  login: "/login",
  register: "/register",
  favorites: "/favorites",
  forSale: "/forsale",
  forRent: "/forrent",
  immoOffices: "/offices",
  immoOffice: { path: "/offices/:id", to: "/offices/" },
  detail: { path: "/detail/:id", to: "/detail/" },
  myProfile: "/myprofile",
  personalInformation: "/personalinformation",
  changePassword: "/changepassword",
  admin: "/admin",
  realtor: "/realtor",
  inbox: "/inbox",
  notFound: "*", // This must be the last one
};

export default ROUTES;
