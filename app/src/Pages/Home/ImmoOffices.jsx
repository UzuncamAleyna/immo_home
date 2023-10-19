import React, { useEffect, useState } from "react";
import ButtonSearch from "../../Components/Button/Search/ButtonSearch";
import style from "./ImmoOffices.module.css";
import { BiSearch } from "react-icons/bi";
import Office from "../../Components/Card/Office/Office";
import { Link } from "react-router-dom";
import ROUTES from "../../Consts/Routes";
import useFetch from "../../Hooks/useFetch";

const ImmoOffices = () => {
  const [filteredData, setFilteredData] = useState([]);
  const [formData, setFormdata] = useState("");

  const { error, data: offices } = useFetch("/immoOffices");

  const handleFilter = (e) => {
    setFormdata(e.target.value.toLowerCase());
  };

  // useEffect to run when the data changes
  useEffect(() => {
    if (offices) {
      const newFilter = offices.filter((value) => {
        return value.name.toLowerCase().includes(formData); // name is the only field we can search for in the immoOffices
      });
      setFilteredData(newFilter);
    }
  }, [formData, offices]);

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <>
      <div className={style.searchBar}>
        <form className={style.formSearch}>
          <i className={style.iconSearch}>
            <BiSearch />
          </i>
          <input
            className={style.inputSearch}
            type="search"
            placeholder="Search"
            onChange={handleFilter}
            value={formData} // value is formData, which is the value of the input
          />
        </form>
        <ButtonSearch>Search</ButtonSearch>
      </div>
      <div className={style.cards}>
        {filteredData.length > 0 ? ( //if there is data, map through it and display it, otherwise display loading
          filteredData.map(
            (
              office //map through the filteredData, which is the data that matches the search, if there is no search, it will display all the data
            ) => (
              <Link
                to={`${ROUTES.immoOffice.to}${office._id}`} // link to the immoOffice page
                key={office._id} // key is the id of the office
                className={style.linkStyle}
              >
                <Office office={office} /> {/* display the office */}
              </Link>
            )
          )
        ) : (
          <p>Loading...</p> // if there is no data, display loading
        )}
      </div>
    </>
  );
};

export default ImmoOffices;
