import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import SearchForm from "./SearchForm";
import SharebnbApi from "./api";
import ListingCard from "./ListingCard";

function ListingList() {
  const [listings, setListings] = useState([]);

  useEffect(() => {
    async function fetchListings() {
      const data = await SharebnbApi.getListings();
      setListings(data);
    }
    fetchListings();
  }, []);

  async function search(searchTerm) {
    const data = await SharebnbApi.getListings(searchTerm);
    setListings(data);
  }

  //TODO: can add spinner component
  if (!listings) return <h1>Listings Loading...</h1>;

  return (
    <div className="ListingList">
      <SearchForm search={search} />

      <div>
        {listings.map(l => (
          <Link
            to={`${l.id}`}
            key={l.id}>
            <ListingCard listing={l} key={l.id} />
          </Link>))}
      </div>
    </div>
  );
}

export default ListingList;