import React, { useRef } from "react";
import classes from "./Form.module.css";
import "./Form.module.css";

const Form = () => {
  const nameRef = useRef();
  const ProgramRef = useRef();

  function handleSubmit(event) {
    event.preventDefault();
    console.log(nameRef.current.value);
    console.log(ProgramRef.current.value);
  }
  return (
    <form onSubmit={handleSubmit}>
      <div className="form-control">
        <label htmlFor="name">Your Name</label>
        <input id="name" type="text" ref={nameRef} />
      </div>
      <div className="form-control">
        <label htmlFor="program">Choose your program </label>
        <select name="program" id="program" ref={ProgramRef}>
          <option value="basic">Basic</option>
          <option value="advanced">Advanced</option>
          <option value="mastery">Mastery</option>
        </select>
      </div>
      <button>Submit</button>
    </form>
  );
};

export default Form;
