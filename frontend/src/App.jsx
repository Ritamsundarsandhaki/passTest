import React, { useState } from 'react';

const UserForm = () => {
  // State for storing form data
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const [responseMessage, setResponseMessage] = useState('');

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // API URL
    const apiUrl = 'http://localhost:5/user/register'; // Replace with your actual API URL

    try {
      // Send POST request using fetch
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData), // Convert the form data to JSON format
      });

      // Check if the response is successful
      if (response.ok) {
        const result = await response.json(); // Parse the response JSON
        setResponseMessage(`Success: ${result.Message}`); // Display success message
      } else {
        const error = await response.json();
        setResponseMessage(`Error: ${error.Message}`); // Display error message
      }
    } catch (error) {
      // Handle network errors
      setResponseMessage(`Network error: ${error.Message}`);
    }
  };

  return (
    <div>
      <h2>User Registration</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
          />
        </label>
        <br /><br />

        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </label>
        <br /><br />

        <label>
          Password:
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </label>
        <br /><br />

        <button type="submit">Submit</button>
      </form>

      <h3>Response Message:</h3>
      <p>{responseMessage}</p>
    </div>
  );
};

export default UserForm;
