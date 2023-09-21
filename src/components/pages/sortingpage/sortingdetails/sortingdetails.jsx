import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "./sortingdetails.scss";

const SortingDetails = () => {
  const [data, setData] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    const url = `http://localhost:4000/section/${id}`;

    const getData = async () => {
      try {
        const result = await axios.get(url);
        console.log(result);
        setData(result.data);
      } catch (err) {
        console.error(err);
      }
    };

    getData();
  }, [id]);

  return (
    <>
      {data && (
        <>
          <figure className="sortingcard" key={data.id}>
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

export default SortingDetails;
