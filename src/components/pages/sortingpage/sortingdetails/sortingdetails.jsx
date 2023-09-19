import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const SortingDetails = () => {
  const [data, setData] = useState([]);

  // Get the 'id' parameter from the URL using React Router
  const { id } = useParams();

  // Fetch event data from the server when the 'id' parameter changes
  useEffect(() => {
    const url = `http://localhost:4000/section/${id}`;

    // Function to fetch data asynchronously
    const getData = async () => {
      try {
        const result = await axios.get(url);
        console.log(result);
        setData(result.data);
      } catch (err) {
        console.error(err);
      }
    };

    getData(); // Call the getData function when the 'id' parameter changes
  }, [id]); // This effect will run whenever 'id' changes

  return (
    <>
      {data && (
        <>
          <figure className="readCard" key={data.id}>
            <h2>{data.title}</h2>

            {data.categories &&
              data.categories.map((category) => {
                return (
                <div key={category.id}>
                <p>{category.title}</p>
                </div>)
              })}
          </figure>
        </>
      )}
    </>
  );
};

export default SortingDetails;
