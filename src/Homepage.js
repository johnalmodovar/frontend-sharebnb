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

  //TODO: add slogan

  return (
    <div className="Homepage">
      <h1>ShareBnB</h1>
      <img src="https://sharebnb-jm.s3.us-west-1.amazonaws.com/123.jpeg" />
      <br></br>
      {currentUser ?
        <h2>Hello {currentUser.user.username}!</h2> :
        <>
          <Link to="/login"><button className="btn btn-primary">Login</button></Link>
          <Link to="/signup"><button className="btn btn-primary">Sign Up</button></Link>
        </>}
    </div >
  );

}

export default Homepage;