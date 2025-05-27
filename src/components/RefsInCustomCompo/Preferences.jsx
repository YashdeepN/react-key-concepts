import React, { useState } from "react";

const Preferences = () => {
  const [wantsProdInfo, setWantsProdInfo] = useState(false);
  const [wantsProdUpdate, setWantsProdUpdate] = useState(false);
  return (
    <div className={classes.preferences}>
      <label>
        <input
          type="checkbox"
          id="pref-new"
          checked={wantsProdInfo}
          onChange={handleChangeProdInfo}
        />
        <span>New Product</span>
      </label>
      <label>
        <input
          type="checkbox"
          id="pref-update"
          checked={wantsProdUpdate}
          onChange={handleChangeProdUpdate}
        />
        <span>Product Update</span>
      </label>
    </div>
  );
};

export default Preferences;
