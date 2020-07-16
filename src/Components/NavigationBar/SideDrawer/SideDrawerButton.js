import React from "react";

const SideDrawerButton = (props) => {
  return (
    <button className="toggle-button" onClick={props.click}>
      <div className="toggle-button__line" />
      <div className="toggle-button__line" />
      <div className="toggle-button__line" />
    </button>
  );
};

export default SideDrawerButton;
