import { Link } from "react-router-dom";
import "./navbar.scss";

const NavBar = () => {
  return (
    <>
      <header>
        <figure className="logo">
        <img
          src={require("./Group 2.png")}
          alt="logo"
        />
        <figcaption>
          <p>Affaldsguiden</p>
        </figcaption>
        </figure>

        <input type="checkbox" id="nav-toggle" className="nav-toggle" />

        <nav>
          <ul>
            <li>
              <Link to="/">Forside</Link>
            </li>
            <li>
              <a href="/sortering">Sortering</a>
            </li>
            <li>
              <a href="/genbrugsstaioner">Genbrugsstationer</a>
            </li>
            <li>
              <a href="/bestilbeholder">Bestil beholder</a>
            </li>
          </ul>
        </nav>
        <Link to={`/login`}>
        <img className="img1"
          src={require("./Ellipse 1.png")}
          alt="loginbackground"
        />
        </Link>
        <label
          htmlFor="nav-toggle"
          title="Show navbar"
          className="nav-toggle-label"
        >
          <span></span>
        </label>
      </header>
    </>
  );
};

export default NavBar;
