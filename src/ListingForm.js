import React, { useState, useContext } from 'react';
import userContext from './userContext';
import FormData from "form-data";

function ListingForm({ upload }) {
  const { currentUser } = useContext(userContext);
  const [listingData, setListingData] = useState({
    title: "",
    description: "",
    price: 0,
    location: "",
    listedBy: currentUser.user.username
  });
  const [fileData, setFileData] = useState(null);

  /** Update filedata input */
  function handleFileChange(evt) {
    setFileData(evt.target.files[0]);
  }

  /** Update formData inputs */
  function handleChange(evt) {
    const { name, value } = evt.target;

    setListingData(fData => ({
      ...fData,
      [name]: value
    }));
  }

  async function handleSubmit(evt) {
    evt.preventDefault();

    const form = new FormData();

    form.append("photoFile", fileData);
    form.append("title", listingData.title);
    form.append("description", listingData.description);
    form.append("price", listingData.price);
    form.append("location", listingData.location);
    form.append("listedBy", listingData.listedBy);

    console.log("WHAT IS FORM DATA, ", ...form);

    // upload(form);
  }

  return (
    <div className="AddListingForm">
      <form onSubmit={handleSubmit}>
        <div className="AddListingForm-title">
          <label htmlFor="title" className="form-control">Title</label>
          <input
            name="title"
            value={listingData.title}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>
        <div className="AddListingForm-description">
          <label htmlFor="description" className="form-control">Description</label>
          <input
            name="description"
            value={listingData.description}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>
        <div className="AddListingForm-price">
          <label htmlFor="price" className="form-control">Price</label>
          <input
            name="price"
            value={listingData.price}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>
        <div className="AddListingForm-location">
          <label htmlFor="location" className="form-control">Location</label>
          <input
            name="location"
            value={listingData.location}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>
        <div className="AddListingForm-photoFile">
          <label htmlFor="photoFile" className="form-control">Photo</label>
          <input
            name="photoFile"
            type="file"
            onChange={handleFileChange}
          />
        </div>
        <div className="AddListingForm-listedBy">
          <label htmlFor="listedBy" className="form-control">Listed By</label>
          <input
            name="listedBy"
            value={listingData.listedBy}
            className="form-control"
            disabled
          />
        </div>
        <button>Submit</button>
      </form>
    </div>
  );


}

export default ListingForm;