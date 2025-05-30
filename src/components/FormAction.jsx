import React from "react";

const FormAction = () => {
  return (
    <form action={submitAction}>
      <p>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" />
      </p>
      <p>
        <label htmlFor="password">Password</label>
        <input type="password" id="password" name="password" />
      </p>
      <p>
        <button>Login</button>
      </p>
    </form>
  );
};

export default FormAction;
