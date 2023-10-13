import React, { useContext } from "react";
import { NavLink, Link } from "react-router-dom";
import userContext from "./userContext";

/** Renders Nav component.
 *
 * Props:
 * - logout(): calls parent function to log user out.
 *
 * App -> Nav
 */
function Nav({ logout }) {
  const { currentUser } = useContext(userContext);

  return (
    <nav className="Nav">
      <Link className="home-btn" to="/">Sharebnb</Link>
      <NavLink to="/listings">Listings</NavLink>

      {currentUser
        ? <div>
          <NavLink to="/upload">Add a Listing</NavLink>
          <Link to="/" onClick={logout}>
            {`Logout(${currentUser.user.username})`}
          </Link>
        </div>
        : <div>
          <NavLink to="/login">Login</NavLink>
          <NavLink to="/signup">Signup</NavLink>
        </div>}
    </nav>
  );
}

export default Nav;