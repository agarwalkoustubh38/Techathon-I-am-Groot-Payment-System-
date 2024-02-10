import * as React from "react";
import "./index.css";
const DropDown = ({ value, options, onChange }) => {
  return (
    <select
      value={value}
      onChange={onChange}
      type="button"
      className="design_button"
    >
      {options.map((option) => (
        <option value={option.value}>{option.label}</option>
      ))}
    </select>
  );
};

export default DropDown;
