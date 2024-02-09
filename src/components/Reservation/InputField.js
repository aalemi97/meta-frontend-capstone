import React from "react";
import "./index.css";

const ErrorMessage = ({ errorMessage }) => {
  return <p className="error">{errorMessage}</p>;
};

export function InputField({
  inputID,
  text,
  required,
  error,
  showError,
  children,
}) {
  return (
    <div className="input-field">
      <label htmlFor={inputID}>
        {text}
        {required && <sup>*</sup>}
      </label>
      {React.cloneElement(children)}
      <div />
      {showError && <ErrorMessage errorMessage={error} />}
    </div>
  );
}
