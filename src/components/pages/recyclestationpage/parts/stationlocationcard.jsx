import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./stationlocationcard.scss";

const StationLocationCard = () => {
  // State variable to hold the data fetched from the API
  const [data, setData] = useState([]);

  // useEffect is used to fetch data when the component mounts
  useEffect(() => {
    // API endpoint URL
    const url = `http://localhost:4000/orgs?attributes=id,name,address,zipcode,city,longtitude,latitude`;

    // Function to make the API request and update the state with the response data
    const getData = async () => {
      try {
        const result = await axios.get(url);
        console.log(result);

        // Update the 'data' state with the fetched data
        setData(result.data);
      } catch (err) {
        console.error(err);
      }
    };

    // Call the getData function when the component mounts (empty dependency array)
    getData();
  }, []);

  return (
    <>
      {/* Container to display location cards */}
      <div className="locationcontainer">
        {/* Check if 'data' is available and map through the locations */}
        {data &&
          data.map((location) => {
            return (
              <figure key={location.id}>
                {/* Link to a specific location page */}
                <Link to={`/genbrugsstaioner/${location.id}`}>
                  {/* Embedded Google Map */}
                  <iframe
                    title="googlemaplocation"
                    className="locationmap"
                    src={`https://maps.google.com/maps?q=${location.longtitude},${location.latitude}&hl=es;&output=embed`}
                  ></iframe>
                  <figcaption>
                    {/* Display location name */}
                    <h3>{location.name}</h3>
                    {/* Display location city */}
                    <p>{location.city}</p>
                  </figcaption>
                </Link>
              </figure>
            );
          })}
      </div>
    </>
  );
};

export default StationLocationCard;
