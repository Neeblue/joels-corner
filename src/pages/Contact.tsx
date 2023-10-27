import React, { useState } from "react";
import "./Contact.css";

export default function Contact() {
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
    <form className="contact-form" onSubmit={handleSubmit}>
      <h1 className="title">Contact form ✉️</h1>

      <label>Name</label>
      <input className="name" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />

      <label>Email</label>
      <input className="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />

      <label>Message</label>
      <textarea className="message" placeholder="Message" value={message} onChange={(e) => setMessage(e.target.value)} />

      <button type='submit'>Submit</button>

    </form>
  )
};