import React, { useContext } from "react";
import userContext from "./userContext";
import { Link } from "react-router-dom";

/**
 * Homepage: Renders welcome message to logged in users or links to signup/login
 *
 * RoutesList => Homepage
 *
 */
function Homepage() {
  const { currentUser } = useContext(userContext);

  //TODO: SearchForm component on homepage
  //TODO: add slogan

  return (
    <div className="Homepage">
      <h1>ShareBnB</h1>
      {currentUser ?
        <h2>Hello {currentUser.username}!</h2> :
        <>
          <Link to="/login">Login</Link>
          <Link to="/signup">Sign Up</Link>
        </>}
    </div>
  );

}

export default Homepage;