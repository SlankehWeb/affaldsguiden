// Import the Link component from the react-router-dom library
import { Link } from "react-router-dom";

// Import the styles from the frontpagearticals.scss file
import "./frontpagearticals.scss";

// Define a functional component named FrontPageArticals
const FrontPageArticals = () => {
  return (
    <>
      {/* Container for the articles */}
      <div className="articalcontainer">
        {/* First article section */}
        <div className="articalparent1">
          {/* Second column with an image */}
          <div className="colum2">
            <img
              src={require("./pictures/unsplashsN4u56baSB0.webp")}
              alt="silver trash can with trash"
            />
          </div>
          {/* First column with article content */}
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
              {/* Link to the /sortering route */}
              <Link to="/sortering">
                <button>Se affaldsguiden</button>
              </Link>
              {/* Link to the /bestilbeholder route */}
              <Link to="/bestilbeholder">
                <button className="bottondif">Bestil storskrald</button>
              </Link>
            </div>
          </div>
        </div>
        {/* Second article section */}
        <div className="articalparent2">
          {/* First column with an image */}
          <div className="colum1">
            <img
              src={require("./pictures/Group 238974.webp")}
              alt="rainbow of trashcans"
            />
          </div>
          {/* Second column with article content */}
          <div className="colum2">
            <h2>
              Bestil <span>din nye affaldsbeholder</span>
            </h2>
            <p>
              when an unknown printer took a galley of type and scramble it to
              make a type specimen book. It has survived not only
            </p>
            {/* Link to the /bestilbeholder route */}
            <Link to="/bestilbeholder">
              <button>Bestil nu</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

// Export the FrontPageArticals component as the default export
export default FrontPageArticals;
