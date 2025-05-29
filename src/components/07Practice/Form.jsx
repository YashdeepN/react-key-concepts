import React from "react";
import classes from "./Form.module.css";
import "./Form.module.css";

const Form = () => {
  function handleSubmit(event) {
    event.preventDefault();
  }
  return (
    <form onSubmit={handleSubmit}>
      <div className="form-control">
        <label htmlFor="name">Your Name</label>
        <input id="name" type="text" />
      </div>
      <div className="form-control">
        <label htmlFor="program"></label>
        <select name="program" id="program">
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
