// Import necessary dependencies and styles
import { React, useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./order.scss";

// Define the functional component Order
const Order = () => {
  // Define a state variable data to store the fetched data
  const [data, setData] = useState([]);

  // Use the useEffect hook to fetch data when the component mounts
  useEffect(() => {
    // Define the URL to fetch data from
    const url = `http://localhost:4000/containers`;

    // Define an asynchronous function getData to make the API request
    const getData = async () => {
      try {
        // Make a GET request using Axios to the specified URL
        const result = await axios.get(url);

        // Log the result to the console for debugging
        console.log(result);

        // Update the state variable data with the fetched data
        setData(result.data);
      } catch (err) {
        // Handle errors by logging them to the console
        console.error(err);
      }
    };

    // Call the getData function to initiate the data fetching process
    getData();
  }, [setData]); // The useEffect hook will re-run whenever setData changes

  // Render the component's UI
  return (
    <div className="ordercontainer">
      <img
        src={require("./Rectangle1.png")}
        alt="first_step_form"
        className="colum1"
      />
      <div className="colum2">
        <div className="colum2text">
          <p>Trin 1</p>
          <h2>Vælg type</h2>
          <p>
            Tation argumentum et usu, dicit viderer evertitur te has. Eu dictas
            concludaturque usu, facete detracto patrioque an per, lucilius
            pertinacia eu vel.
          </p>
        </div>
        <div className="figuregrid">
          {data &&
            data.map((container) => {
              return (
                <figure key={container.id}>
                  {/* Create a Link to another route using React Router */}
                  <Link to={`/bestilbeholder/${container.id}`}>
                    <img
                      src={`http://localhost:4000/Assets/Images/Icons/${container.icon_filename}`}
                      alt={container.name}
                    />
                    <figcaption>
                      <p>{container.name}</p>
                    </figcaption>
                  </Link>
                </figure>
              );
            })}
        </div>
      </div>
    </div>
  );
};

// Export the Order component as the default export
export default Order;
