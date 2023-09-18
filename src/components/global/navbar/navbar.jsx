import { Link } from "react-router-dom";
import "./navbar.scss";

const NavBar = () => {
  return (
    <>
      <header>
  

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
