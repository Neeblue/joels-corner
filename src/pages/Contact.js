import "../contact.css";
import { useState } from "react";

const Contact = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        // db.collection('contacts').add({
        //     name:name,
        //     email:email,
        //     message:message
        // })
        // .then(() => {
        //     alert("Message has been submitted 👍")
        // })
        // .catch(error => {
        //     alert(error.message)
        // });
    };

    return (
        <form className="form" onSubmit={{handleSubmit}}>
            <h1>Contact form ✉️</h1>

            <label>Name</label>
            <input placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />

            <label>Email</label>
            <input placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />

            <label>Message</label>
            <textarea placeholder="Message"  value={message} onChange={(e) => setMessage(e.target.value)} />

            <button type='submit'>Submit</button>

        </form>
    )
}

export default Contact;