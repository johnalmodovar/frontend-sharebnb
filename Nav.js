import React from "react";
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

      {currentUser
        ? <div>
          {/* Show All Listings */}
          {/* Add Listing Form */}
          <Link to="/" onClick={logout}>
            {`Logout(${currentUser.username})`}
          </Link>
        </div>
        : <div>
          <Navlink to="/login">Login</Navlink>
          <NavLink to="/signup">Signup</NavLink>
        </div>}
    </nav>
  );
}

export default Nav;