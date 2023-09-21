import { Link } from "react-router-dom";

import "./frontpagearticals.scss";

const FrontPageArticals = () => {
  return (
    <>
      <div className="articalcontainer">
        <div className="articalparent1">
          <div className="colum2">
            <img
              src={require("./pictures/unsplashsN4u56baSB0.webp")}
              alt="silver trash can with trash"
            />
          </div>{" "}
          <div className="colum1">
            <h2>
              Din <span>guide til sortering</span>
            </h2>
            <p>
              Her kan du se hvordan du skal sortere og hvad der skal i hvilke
              beholdere. Du får også tips og tricks til, hvordan du gør det nemt
              at sortere hjemme hos dig.
            </p>
            <div>
              <Link to="/sortering">
              <button>Se affaldsguiden</button>
              </Link>
              <Link to="/bestilbeholder">
              <button className="bottondif">Bestil storskrald</button>
           </Link> 
           </div>
          </div>
        </div>
        <div className="articalparent2">
          <div className="colum1">
            <img
              src={require("./pictures/Group 238974.webp")}
              alt="rainbow of trashcans"
            />
          </div>
          <div className="colum2">
            <h2>
              Bestil <span>din nye affaldsbeholder</span>
            </h2>
            <p>
              when an unknown printer took a galley of type and scramble it to
              make a type specimen book. It has survived not only
            </p>
            <Link to="/bestilbeholder">
            <button>Bestil nu</button></Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default FrontPageArticals;
