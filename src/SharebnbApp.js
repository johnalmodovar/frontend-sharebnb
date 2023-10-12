import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes } from "react-router-dom";
import jwtDecode from "jwt-decode";
import SharebnbApi from "./api";
import userContext from "./userContext";

import './App.css';

import Nav from "./Nav";
import RoutesList from "./RoutesList";


/** Main App component for Sharebnb.
 *
 * State:
 * - currentUser: { username, firstName, lastName, email, phone }
 * - token: { token }
 * - isLoaded: boolean to check if data has been fetched.
 * - listings: TODO:
 *
 * App -> { Nav, RoutesList }
 */

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [isLoaded, setIsLoaded] = useState(false);


  useEffect(function getCurrentUser() {
    async function fetchCurrentUser() {
      const { username } = jwtDecode(token);
      console.log("username in useEffect,", username);
      console.log("currentUser in use effect, ", currentUser);
      try {
        const user = await SharebnbApi.getUser(username);
        console.log("user in useEffect, ", user);
        setCurrentUser(user);
        setIsLoaded(true);
      } catch (err) {
        console.error(err);
      }
    }
    token ? fetchCurrentUser() : setIsLoaded(true);
  }, [token]);

  useEffect(function setToken() {

    token
      ? localStorage.setItem("token", token)
      : localStorage.removeItem("token");

  }, [token]);

  /** fetches token from backend with username/password.
   *  also sets token to state.
   */

  async function login(user) {
    const token = await SharebnbApi.login(user);

    setToken(token);
  }

  /** registers user to database from server with form data.
   *  sets token in state.
   */

  async function signup(userData) {
    const token = await SharebnbApi.register(userData);
    console.log("!!!TOKEN in sign up function in main app: ", token);
    setToken(token);
  }

  /** sets current user and token to null. */

  function logout() {
    setCurrentUser(null);
    setToken(null);
  }

  /** handles file submission for listings. */

  async function upload(formData) {

    const listing = await SharebnbApi.addListing(formData);
    console.log(listing);
  }

  //TODO: if there's time, create spinner component and render here.
  if (!isLoaded) return <h1>Sharebnb Loading...</h1>;

  //TODO: pass listing state to props after creating it.
  return (
    <div className="App">
      <userContext.Provider value={{ currentUser }}>
        <BrowserRouter>
          <Nav logout={logout} />
          <RoutesList
            login={login}
            signup={signup}
            logout={logout}
            upload={upload}
          />
        </BrowserRouter>
      </userContext.Provider>
    </div>
  );
}

export default App;
