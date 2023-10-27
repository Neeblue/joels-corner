import React, { useState } from "react";
import "./Contact.css";

const Contact = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    // Add your code to submit the form data to the database here
    // For example, using Firebase:
    // db.collection('contacts').add({
    //     name: name,
    //     email: email,
    //     message: message
    // })
    // .then(() => {
    //     alert("Message has been submitted 👍")
    // })
    // .catch(error => {
    //     alert(error.message)
    // });
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h1>Contact form ✉️</h1>

      <label>Name</label>
      <input
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <label>Email</label>
      <input
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <label>Message</label>
      <textarea
        placeholder="Message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />

      <button type="submit">Submit</button>
    </form>
  );
};

export default Contact;
