import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const SortingCards = () => {
  const [events, setEvents] = useState([]);

  // Fetch data from the API when the component mounts
  useEffect(() => {
    // API URL with query parameters
    const url = `http://localhost:4000/section`;

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
      {events &&
        events.map((data) => {
          console.log(data);
          return (
            <figure key={data.id}>
              <Link to={`/sortering/${data.id}`}>
                <div className="imgbox">
                  <img
                    src={`http://localhost:4000/Assets/Images/Guide/Categories/${data.filename}`}
                    alt={data.title}
                  />
                </div>
                <figcaption style={{ backgroundColor: `#${data.color}` }}>
                  <p>{data.title}</p>
                </figcaption>
              </Link>
            </figure>
          );
        })}
    </>
  );
};

export default SortingCards;
