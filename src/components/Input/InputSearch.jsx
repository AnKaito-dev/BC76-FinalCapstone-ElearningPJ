import { Input } from "antd";
import React from "react";

const InputSearch = ({ placeholder, value, handleChange, handleClick }) => {
  return (
    <Input.Search
      placeholder={placeholder}
      onClick={handleClick}
      onChange={handleChange}
      value={value}
    />
  );
};

export default InputSearch;
