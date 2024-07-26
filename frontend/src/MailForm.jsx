import React, { useState } from "react";
import axios from "axios";

export default function MailForm(){
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/api/submit", { email });
      setMessage(response.data);
    } catch (error) {
      setMessage("Error: Email not sent");
    }
  };

  return (
    <div>
      <h1>Sign Up For Our Daily Insider</h1>
      <form onSubmit={handleSubmit}>
        <input type="email" value={email} onChange={(event) => setEmail(event.target.value)} placeholder="Enter your email" required/>
        <button type="submit">Subscribe</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};
