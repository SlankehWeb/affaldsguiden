import "./footer.scss";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <img className="footer-img" src={require("./Path 2.png")} alt="logo" />
      <footer>
        <div className="footer-colum1">
          <h3>
            {" "}
            <img src={require("./Group 2.png")} alt="logo" />
             Affaldsguiden
          </h3>
          <p>
            Vi arbejder for at informere om korrekt affaldssortering. Ved at
            sortere hjælper du os, men også klimaet.
          </p>
        </div>
        <div className="footer-colum2">
          <p>©2023 Affaldsguiden.</p>
        </div>

        <div className="footer-colum3">
          {" "}
          <Link
            onClick={() => {
              window.scroll(0, 0);
            }}
          >
            <p>
              Back to top{" "}
              <img
                className="footer-img"
                src={require("./vuesax-outline-arrow-up.png")}
                alt="logo"
              />
            </p>
          </Link>
        </div>
      </footer>
    </>
  );
};

export default Footer;
