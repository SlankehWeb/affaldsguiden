import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const StationLocationDetail = () => {
    const [data, setData] = useState([]);

    // Get the 'id' parameter from the URL using React Router
    const { id } = useParams();
  
    // Fetch event data from the server when the 'id' parameter changes
    useEffect(() => {
      const url = `http://localhost:4000/orgs/${id}`;
  
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
  
    useEffect(()=>{
        const ifameData=document.getElementById("googlemapid")
        ifameData.src=`https://maps.google.com/maps?q=${data.longtitude},${data.latitude}&hl=es;&output=embed`
    })
    return (
      <>
        {data && (
          <>
            <figure className="readCard" key={data.id}>
                <iframe title="googlemapimagie" id="googlemapid" height="500px" width="100%"></iframe>
                <figcaption>
              <h2>{data.name}</h2>
              <p>{data.address}</p>
              <p>{data.zipcode}</p>
              <p>{data.city}</p>
              <p>{data.country}</p>
              </figcaption>
            </figure>
          </>
        )}
      </>
    );
  };
  
  export default StationLocationDetail;
  