import React, { useState, useContext } from 'react';
import userContext from './userContext';

function AddListingForm() {
  const { currentUser } = useContext(userContext);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    price: 0,
    location: "",
    photoFile: "",
    listedBy: currentUser.user.username
  });

  async function handleSubmit(evt) {
    evt.preventDefault();


  }



}

export default AddListingForm;