// Import necessary modules and functions from the React library
import { createContext, useContext, useEffect, useState } from "react";

// Create a new context called AuthContext
const AuthContext = createContext();

// Create a component called AuthProvider that will manage authentication data
const AuthProvider = ({ children }) => {
  // Define a state variable loginData and a function setLoginData to update it
  const [loginData, setLoginData] = useState("");

  // Use the useEffect hook to run this code when children (components) change
  useEffect(() => {
    // Check if a token exists in the sessionStorage
    if (sessionStorage.getItem("token")) {
      // If a token exists, parse it and set it as the loginData state
      setLoginData(JSON.parse(sessionStorage.getItem("token")));
    }
  }, [children]);

  // Render the AuthContext.Provider component to provide loginData and setLoginData to its children
  return (
    <AuthContext.Provider value={{ loginData, setLoginData }}>
      {children}
    </AuthContext.Provider>
  );
};

// Create a custom hook called useAuth to easily access the AuthContext data
const useAuth = () => useContext(AuthContext);

// Export the AuthContext, AuthProvider, and useAuth for use in other parts of the application
export { AuthContext, AuthProvider, useAuth };
