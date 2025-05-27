import React, { useRef } from "react";
import Preferences from "./Preferences";

const PreferencesForm = () => {
  const preferencesRef = useRef({});

  function handleSubmit(event) {
    event.preventDefault();
    console.log(preferencesRef.current.selectedPreferences);
    preferencesRef.current.reset();
  }
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="email">Your email</label>
        <input type="email" id="email" />
      </div>
      <Preferences ref={preferencesRef} />
      <button>Submit</button>
    </form>
  );
};

export default PreferencesForm;
