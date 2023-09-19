import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";


const StationLocationCard = () => {
  const [events, setEvents] = useState([]);

  // Fetch data from the API when the component mounts
  useEffect(() => {
    // API URL with query parameters
    const url = `http://localhost:4000/orgs?attributes=id,name,address,zipcode,city`;

    // Function to make the API request
    const getData = async () => {
      try {
        const result = await axios.get(url);
        console.log(result);
        // Set the retrieved data in the state
        setEvents(result.data);
      } catch (err) {
        console.error(err);
      }
    };

    // Call the function to fetch data
    getData();
  }, [setEvents]);

  return (
    <>
      <div className="stationcardbox">
        {events &&
          events.map((data) => {
            console.log(data);
            return (
                <Link to={`/genbrugsstaioner/${data.id}`}>
              <figure key={data.id}>
                <img
                  src={require("./thumbnail.jpg")}
                  alt={data.NAME}
                />
                <figcaption>
                  <h3>{data.name}</h3>
                  <p>{data.address}</p>
                  <p>{data.zipcode}</p>
                  <p>{data.city}</p>
                </figcaption>
              </figure>
              </Link>
            );
          })}
      </div>
    </>
  );
};

export default StationLocationCard;
