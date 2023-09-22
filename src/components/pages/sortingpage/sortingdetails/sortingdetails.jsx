import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "./sortingdetails.scss";

// Define the SortingDetails component
const SortingDetails = () => {
  // Initialize state to store data
  const [data, setData] = useState([]);

  // Get the 'id' parameter from the route
  const { id } = useParams();

  // Use the 'useEffect' hook to fetch data when 'id' changes
  useEffect(() => {
    // Define the URL to fetch data from
    const url = `http://localhost:4000/section/${id}`;

    // Define an async function to fetch data and update the state
    const getData = async () => {
      try {
        // Send a GET request to the specified URL
        const result = await axios.get(url);

        // Log the result to the console
        console.log(result);

        // Update the 'data' state with the fetched data
        setData(result.data);
      } catch (err) {
        // Handle errors if the request fails
        console.error(err);
      }
    };

    // Call the 'getData' function when 'id' changes
    getData();
  }, [id]);

  // Render the component
  return (
    <>
      {/* Render data only if it exists */}
      {data && (
        <>
          {/* Render a card for the sorting details */}
          <figure className="sortingcard" key={data.id}>
            {/* Render the top section of the card with background color */}
            <div
              className="topcard"
              style={{ backgroundColor: `#${data.color}` }}
            >
              <h2>{data.title}</h2>
              <img
                src={`http://localhost:4000/Assets/Images/Guide/Categories/${data.filename}`}
                alt={data.title}
              />
            </div>
            {/* Map over categories and render them in the bottom section */}
            {data.categories &&
              data.categories.map((category) => {
                return (
                  <div key={category.id} className="bottomcard">
                    <img
                      src={`http://localhost:4000/Assets/Images/Guide/Icons/${category.icon_filename}`}
                      alt={category.title}
                    />
                    <h2>{category.title}</h2>
                  </div>
                );
              })}
          </figure>
        </>
      )}
    </>
  );
};

// Export the SortingDetails component
export default SortingDetails;
