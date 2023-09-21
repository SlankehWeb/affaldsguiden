import { React, useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./order.scss";

const Order = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const url = `http://localhost:4000/containers`;

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
  }, [setData]);

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

export default Order;
