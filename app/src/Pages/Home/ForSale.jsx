import React, { useEffect, useState } from "react";
import Search from "../../Components/Search/Search";
import TitleHome from "../../Components/Title/Home/TitleHome";
import Card from "../../Components/Card/Card";
import style from "./Home.module.css";
import useFetch from "../../Hooks/useFetch";

const ForSale = () => {
  const [filteredData, setFilteredData] = useState([]);
  const [formData, setFormdata] = useState("");

  const { error, data: properties } = useFetch("/forSale");

  const handleFilter = (e) => {
    setFormdata(e.target.value.toLowerCase());
  };

  useEffect(() => {
    if (properties) {
      const newFilter = properties.filter((value) => {
        return (
          value.city.toLowerCase().includes(formData) ||
          value.type.toLowerCase().includes(formData) ||
          value.price.toString().includes(formData)
        );
      });
      setFilteredData(newFilter);
    }
  }, [formData, properties]); // formData and properties are for the useEffect to run when the data changes

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <>
      <Search onChange={handleFilter} value={formData} />
      <TitleHome>For Sale</TitleHome>

      <div className={style.cards}>
        {filteredData.length > 0 ? ( //if there is data, map through it and display it, otherwise display loading
          filteredData.map((property) => (
            <Card key={property._id} property={property} />
          ))
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </>
  );
};

export default ForSale;
