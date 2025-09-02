import React, { useState } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const templateParams = {
      from_name: name,
      from_email: email,
      message: message,
    };

    emailjs
      .send("service_14hryp3", "template_1mphun4", templateParams, "O5_4XOdtzNj7apXAt")
      .then(
        (result) => {
          console.log("Message Sent ✅", result.text);
          alert("Message Sent Successfully!");
          setName("");
          setEmail("");
          setMessage("");
        },
        (error) => {
          console.error("Message Failed ❌", error.text);
          alert("Failed to send message. Try again!");
        }
      );
  };

  return (
    <div id="contact" className="h-full flex flex-col items-center">
      <h1 className="mt-4 border-b-3 border-white text-4xl font-extrabold pb-1 bg-gradient-to-r brightness-150 from-emerald-800 via-emerald-800 to-yellow-600 text-transparent bg-clip-text">
        Contact Me
      </h1>
      <div className="h-full w-full flex justify-center p-10">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-4 w-full max-w-md border-2 rounded border-white shadow-md shadow-yellow-950 bg-blend-overlay p-4 md:p-10"
        >
          <label className="text-white" htmlFor="name">
            Name
          </label>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            className="border-2 border-white p-2 bg-transparent text-white rounded-md focus:outline-none focus:border-yellow-500"
            required
            autoComplete="off"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <label className="text-white" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            name="email"
            placeholder="Enter email"
            className="border-2 border-white p-2 bg-transparent text-white rounded-md focus:outline-none focus:border-yellow-500"
            required
            autoComplete="off"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label className="text-white" htmlFor="message">
            Message
          </label>
          <textarea
            name="message"
            placeholder="Send message"
            className="border-2 border-white p-2 bg-transparent text-white rounded-md focus:outline-none focus:border-yellow-500 h-24 resize-none"
            required
            autoComplete="off"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />

          <p className="text-blue-500 brightness-150">
            I am available for freelance or full-time positions. Contact me and let's talk.
          </p>
          <input
            className="bg-yellow-600 p-3 mt-5 rounded-xl cursor-pointer"
            type="submit"
            value="Send Message"
          />
        </form>
      </div>
    </div>
  );
};

export default Contact;
