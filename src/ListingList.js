import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import SearchForm from "./SearchForm";
import ListingDetail from "./ListingDetail";
import SharebnbApi from "./api";

function ListingList() {
  const [listings, setListings] = useState([]);

  useEffect(() => {
    async function fetchListings() {
      const data = await SharebnbApi.getListings();
      setListings(data);
    }
    fetchListings();
  }, []);

  /** TODO: search function */
  async function search(searchTerm) {
    //TODO: edit getListings to filter by whatever search term is
  }

  //TODO: can add spinner component
  if (!listings) return <h1>Listings Loading...</h1>;

  return (
    <div className="ListingList">
      {/* SearchForm component here */}

      <div>
        {listings.map(l => (
          <Link
            to={`${l.id}`}
            key={l.id}>
            {/* ListingCard here */}
          </Link>))}
      </div>
    </div>
  );
}

export default ListingList;