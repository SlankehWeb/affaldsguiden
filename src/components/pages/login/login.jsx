// Import necessary dependencies and components
import { useForm } from "react-hook-form";
import axios from "axios";
import { useAuth } from "../../auth/auth";
import Profile from "../profile/profile";
import "./login.scss";

// Define the Login component
const Login = () => {
  // Access authentication data and functions using the useAuth hook
  const { loginData, setLoginData } = useAuth();

  // Initialize form validation using react-hook-form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // Function to handle form submission
  const formSubmit = async (form) => {
    // Create a URL-encoded form data
    const formData = new URLSearchParams();
    formData.append("username", form.username);
    formData.append("password", form.password);

    // Define the API endpoint for login
    const endpoint = `http://localhost:4000/login`;

    try {
      // Send a POST request to the login endpoint
      const result = await axios.post(endpoint, formData);

      // Call function to handle session data
      handleSessionData(result.data);
    } catch (err) {
      // Handle any errors that occur during the login request
      console.error(`Kunne ikke logge ind: ${err}`);
    }
  };

  // Function to handle session data after successful login
  const handleSessionData = async (data) => {
    if (data) {
      // Store the login token in the session storage
      sessionStorage.setItem("token", JSON.stringify(data));

      // Update the authentication context with the user data
      setLoginData(data);
    }
  };

  // Function to log out the user
  const logOut = () => {
    // Remove the login token from session storage
    sessionStorage.removeItem("token");

    // Clear the authentication context
    setLoginData("");
  };

  return (
    <>
      <div className="pageContainer">
        <figure className="logintextdiv">
          <figcaption>
            <h2>
              <img src={require("./pictures/Group 2.webp")} alt="logo" />
              Affaldsguiden
            </h2>
            <p>Log ind på Affaldsguiden for at anmelde stationer</p>
          </figcaption>
        </figure>

        <div className="loginContainer">
          <h2>Login</h2>
          {!loginData && !loginData.username ? (
            <form onSubmit={handleSubmit(formSubmit)}>
              <div>
                <input
                  type="text"
                  placeholder="E-mail"
                  {...register("username", { required: true })}
                />
                {errors.username && (
                  <span className="error">Du skal indtaste dit brugernavn</span>
                )}
              </div>
              <div>
                <input
                  placeholder="Password"
                  type="password"
                  {...register("password", { required: true })}
                />
                {errors.password && (
                  <span className="error">
                    Du skal indtaste din adgangskode
                  </span>
                )}
              </div>

              <div className="submit">
                <button type="submit">LOGIN</button>
              </div>
            </form>
          ) : (
            <section>
              <p>
                {`Du er logget ind som ${loginData.user.firstname} ${loginData.user.lastname} `}{" "}
              </p>
              <Profile />
              <button onClick={() => logOut()} id="logout">
                LOG UD
              </button>
            </section>
          )}
        </div>
      </div>
    </>
  );
};

export default Login;
