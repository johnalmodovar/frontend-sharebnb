

/**
 * ListingCard:
 *
 * renders listing on ListingList page with link available for more details
 *
 * Props:
 * - listing object with all details about listing
 *  {title:..., }
 *
 */
function ListingCard({ listing }) {
  return (
    <div className="ListingCard">
      <img src={listing.photoUrl} />
      <h2>{listing.title}</h2>
      <h4>{listing.location}</h4>
      <p>{listing.price}</p>
    </div>
  );
}

export default ListingCard;