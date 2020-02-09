import React from "react";
import { useForm } from "react-hook-form";
import "./style.css";

export default function App() {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = data => console.log(data);
  console.log(errors);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        id="nameInput"
        className="formInput"
        type="text"
        placeholder="Name"
        name="Name"
        ref={register({ required: true })}
      />
      <input
        id="emailInput"
        className="formInput"
        type="text"
        placeholder="Email"
        name="Email"
        ref={register({ required: true, pattern: /^\S+@\S+$/i })}
      />
      <textarea
        id="messageInput"
        name="Message"
        ref={register({ required: true })}
      />

      <input type="submit" />
    </form>
  );
}
