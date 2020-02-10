import React from "react";
import { useForm } from "react-hook-form";
import "./style.css";

export default function App() {
  const { register, errors, handleSubmit } = useForm({
    mode: "onBlur"
  });
  const onSubmit = data => {
    alert(JSON.stringify(data));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="name">Name</label>
        <input
          id="nameInput"
          className="formInput"
          name="name"
          placeholder="Tucker Triggs"
          ref={register({ required: true })}
        />
        {errors.name && <p>Please enter your name</p>}
      </div>

      <div>
        <label htmlFor="email" placeholder="samwatson@gmail.com">
          Email
        </label>
        <input
          id="emailInput"
          className="formInput"
          name="email"
          ref={register({ required: true, pattern: /^\S+@\S+$/i })}
        />
        {errors.email && <p>Please enter a valid email</p>}
      </div>

      <div>
        <label htmlFor="message">Message</label>
        <textarea
          id="messageInput"
          className="formInput"
          name="message"
          placeholder="Enter your message here."
          ref={register({ required: true })}
        />
        {errors.message && <p>Please enter a message</p>}
      </div>

      <input type="submit" />
    </form>
  );
}
