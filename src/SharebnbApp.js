import React, { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import jwtDecode from "jwt-decode";
import SharebnbApi from "./api";

import './App.css';

import RoutesList from "./RoutesList";

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [isLoaded, setIsLoaded] = useState(false);
  // const [listings, setListings] = useState([]);

  useEffect(function getCurrentUser() {
    async function fetchCurrentUser() {
      const { username } = jwtDecode(token);

      try {
        const user = await SharebnbApi.getUser(username);
      }
    }
  }, [token]);

  return (
    <div className="App">

    </div>
  );
}

export default App;
