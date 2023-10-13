import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import SharebnbApi from "./api";

function ListingDetail() {
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
    <>
      <div className="ListDetail">
        <img src={listing.photoUrl} />
        <h2>{listing.title}</h2>
        <h4>{listing.location}</h4>
        <p>Host: {listing.listedBy}</p>
        <p>${listing.price}</p>
        <p>Description: {listing.description}</p>
      </div>
      <div>
        <form>
          <h4>Message the host!</h4>
          <input />
          <button>Submit</button>
        </form>
      </div>
    </>
  );

}

export default ListingDetail;