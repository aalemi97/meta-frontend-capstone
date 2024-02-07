import React, { useState } from "react";
import "./index.css";

const ErrorMessage = ({ errorMessage }) => {
  return <p className="error">{errorMessage}</p>;
};

export function InputField(props) {
  const [target, setTarget] = useState({
    value: "",
    isTouched: false,
    isValid: true,
  });
  function handleInputChange(event) {
    const newValue = event.target.value;
    const isValid = props.validate(newValue);
    setTarget({ ...target, value: newValue, isValid: isValid });
  }
  return (
    <div className="input-field">
      <label htmlFor={props.inputID}>
        {props.text}
        {props.required && <sup>*</sup>}
      </label>
      {React.cloneElement(props.children, {
        value: target.value,
        onChange: handleInputChange,
        onBlur: () => setTarget({ ...target, isTouched: true }),
      })}
      <div />
      {target.isTouched && !target.isValid && (
        <ErrorMessage errorMessage={props.error} />
      )}
    </div>
  );
}
