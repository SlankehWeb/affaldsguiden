import { Link } from "react-router-dom";

import "./findandlogin.scss";

const FindAndLogin = () => {
  return (
    <>
      <div className="findandlogindiv">
        <h2>Find og anmeld genbrugsstationer</h2>
        <div>
          <Link to="/genbrugsstaioner">
            <button>Find station</button>
          </Link>
          <Link to={`/login`}>
            <button>Log ind</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default FindAndLogin;
