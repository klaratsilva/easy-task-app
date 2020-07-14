import React from "react";

const Checked = (props) => {
  let classes = "checkbox";
  if (!props.isDone) classes = "red";
  return (
    <div
      onClick={props.onClick}
      className={classes}
      //aria-hidden="true"
    ></div>
  );
};
export default Checked;
