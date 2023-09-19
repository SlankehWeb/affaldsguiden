import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./stationlocationcard.scss";

const StationLocationCard = () => {
  const [data, setData] = useState([]);

  // Fetch data from the API when the component mounts
  useEffect(() => {
    // API URL with query parameters
    const url = `http://localhost:4000/orgs?attributes=id,name,address,zipcode,city,longtitude,latitude`;

    // Function to make the API request
    const getData = async () => {
      try {
        const result = await axios.get(url);
        console.log(result);
        // Set the retrieved data in the state
        setData(result.data);
      } catch (err) {
        console.error(err);
      }
    };

    // Call the function to fetch data
    getData();
  }, []);

  return (
    <>
      <div className="locationcontainer">
        {data &&
          data.map((location) => {
            return (
              <figure key={location.id}>
                <Link to={`/genbrugsstaioner/${location.id}`}>
                  <iframe
                    title="googlemaplocation"
                    className="locationmap"
                    src={`https://maps.google.com/maps?q=${location.longtitude},${location.latitude}&hl=es;&output=embed`}
                  ></iframe>
                  <figcaption>
                    <h3>{location.name}</h3>

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
