import React, { useState } from "react";

/** Renders search form for listings.
 *
 * Props:
 * - TODO:
 *
 * ListingList -> SearchForm
 */
function SearchForm({ search }) {
  const [searchTerm, setSearchTerm] = useState("");

  /** Updates search input value */
  function handleChange(evt) {
    setSearchTerm(evt.target.value);
  }

  /** call parent filter function with current search term value. */
  function handleSubmit(evt) {
    evt.preventDefault();
    //TODO: parent function inside of ListingList
    search(searchTerm);
  }

  return (
    <div className="SearchForm mt-3 w-50">
      <form className="d-flex" onSubmit={handleSubmit}>
        <input
          className="form-control mx-3"
          placeholder="Enter Search Term..."
          onChange={handleChange}
          value={searchTerm}
        />
        <button className="btn btn-primary mt-2">Submit</button>
      </form>
    </div>
  );
}

export default SearchForm;
