import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import SharebnbApi from "./api";

function ListDetail() {
  const { id } = useParams();
  const [listing, setListing] = useState(null);

  useEffect(function getListingOnMount() {
    async function fetchListing() {
      try {
        const listingData = await SharebnbApi.getListing(id);
        setListing(listingData);
      } catch (err) {
        console.error(err);
      }
    }
    fetchListing();
  }, [id]);

  //TODO: add loading spinner or component

  if (!listing) return <h1>Loading...</h1>;

  return (
    <div className="ListDetail">
      <img src={listing.photoUrl} />
      <h2>{listing.title}</h2>
      <p>${listing.price}</p>
      <p>Availability: {listing.availability}</p>
      <p>Description: {listing.description}</p>
    </div>
  );

}

export default ListDetail;