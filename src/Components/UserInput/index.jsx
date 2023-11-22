import React, { useState } from "react";

const UserInput = () => {
  const [name, setName] = useState("");

  const handleInputChange = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle the submission (you can add your logic here)
    console.log("Submitted name:", name);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          Enter your name:
          <input
            type="text"
            value={name}
            onChange={handleInputChange}
            placeholder="Enter your name"
          />
        </label>
        <button type="submit">Submit</button>
      </form>
      <p>{name}</p>
    </>
  );
};

export default UserInput;
