import React, { forwardRef, useState } from "react";

const Preferences = forwardRef((props, ref) => {
  const [wantsProdInfo, setWantsProdInfo] = useState(false);
  const [wantsProdUpdate, setWantsProdUpdate] = useState(false);

  function handleChangeProdInfo() {
    setWantsProdInfo((prev) => !prev);
  }

  function handleChangeProdUpdate() {
    setWantsProdUpdate((prev) => !prev);
  }

  function reset() {
    setWantsProdInfo(false);
    setWantsProdUpdate(false);
  }

  ref.current.reset = reset;
  ref.current.selectedPreferences = {
    newProductInfo: wantsProdInfo,
    productUpdateInfo: wantsProdUpdate,
  };

  return (
    <div>
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
});
export default Preferences;
