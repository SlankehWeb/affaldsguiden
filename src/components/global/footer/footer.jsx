import "./footer.scss";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <img
        className="footer-img"
        src={require("./pictures/Path 2.webp")}
        alt="logo"
      />
      <footer>
        <div className="footer-colum1">
          <h3>
            <img src={require("./pictures/Group 2.webp")} alt="logo" />
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
              Back to top
              <img
                className="footer-img2"
                src={require("./pictures/vuesax-outline-arrow-up.webp")}
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
