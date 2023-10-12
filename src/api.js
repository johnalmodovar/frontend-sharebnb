const BASE_URL = process.env.REACT_APP_BASE_URL;

/** Class for API methods.
 *
 *  Includes:
 * - fetching token for user validaton
 * - posting listings
 */

class SharebnbApi {
  static token = localStorage.getItem("token");

  /** logins in user with username and password => { token } */
  static async login(user) {
    const { username, password } = user;
    const response = await fetch(`${BASE_URL}/auth/login`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          password,
        })
      }
    );
    const tokenResponse = await response.json();

    this.token = tokenResponse.token;

    return this.token;
  }

  /** registers user with form data => { token } */
  static async register(user) {
    const { username,
      firstName,
      lastName,
      password,
      email,
      phone } = user;

    const response = await fetch(`${BASE_URL}/auth/register`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          firstName,
          lastName,
          password,
          email,
          phone
        })
      }
    );
    const tokenResponse = await response.json();

    this.token = tokenResponse.token;

    return this.token;
  }

  /** Grabs user data with username */
  static async getUser(username) {
    const response = await fetch(`${BASE_URL}/users/${username}`,
      {
        headers: {
          "authorization": this.token,
        }
      }
    );

    const user = await response.json();

    return user;
  }

  //TODO: listing stuff...
}

export default SharebnbApi;