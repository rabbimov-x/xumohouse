import React from "react";
import { Container } from "./style";

const Input = ({ value, onChange, name, defalutValue, pleceholder, type }) => {
  return (
    <Container
      value={value}
      onChange={onChange}
      type={type}
      pleceholder={pleceholder}
      defalutValue={defalutValue}
      name={name}
    />
  );
};

export default Input;
