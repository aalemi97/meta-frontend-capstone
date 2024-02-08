import { useState } from "react";
import { InputField } from "./InputField";
import {
  validateEmailInput,
  validateDateInput,
} from "../../utilities/utils.ts";
import "./index.css";

export const ReservationForm = ({ availableTimes, onSlotSelection }) => {
  const [isNameValid, setIsNameValid] = useState(false);
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [isDateValid, setIsDateValid] = useState(false);
  const [isSizeValid, setIsSizeValid] = useState(false);
  const validateName = (name) => {
    const isValid = name.length >= 3;
    setIsNameValid(isValid);
    return isValid;
  };
  function validateEmail(email) {
    const isValid = validateEmailInput(email);
    setIsEmailValid(isValid);
    return isValid;
  }
  const validateDate = (date) => {
    const isValid = validateDateInput(date);
    setIsDateValid(isValid);
    return isValid;
  };
  const validateSize = (size) => {
    const isValid = size >= 1 && size <= 10;
    setIsSizeValid(isValid);
    return isValid;
  };
  const onSelectTime = (time) => {
    onSlotSelection(time);
    return true;
  };
  return (
    <form className="container">
      <h2>Make a reservation</h2>
      <InputField
        inputID={"name"}
        text={"Name"}
        required={true}
        error={
          "Please enter a valid name! The name should contain at least three characters."
        }
        validate={validateName}
      >
        <input
          id="name"
          type="text"
          placeholder="Full Name"
          minLength={3}
          maxLength={50}
        />
      </InputField>
      <InputField
        inputID={"email"}
        text={"Email Address"}
        required={true}
        error={"Please enter a valid email address!"}
        validate={validateEmail}
      >
        <input id="email" type="email" placeholder="example@example.ca" />
      </InputField>
      <InputField
        inputID={"date"}
        text={"Date"}
        required={true}
        error={
          "Please enter a valid date! We cannot reserve a table for past days or for a day which is not within 7 days from today."
        }
        validate={validateDate}
      >
        <input id="date" type="date" />
      </InputField>
      <InputField
        inputID={"time"}
        text={"Time"}
        required={true}
        error={"Please select an available time slot!"}
        validate={onSelectTime}
      >
        <select id="time">
          {availableTimes.map((time) => (
            <option key={time} value={time}>
              {time}
            </option>
          ))}
        </select>
      </InputField>
      <InputField
        inputID={"guests"}
        text={"Number of Guests"}
        required={true}
        error={
          "Number of attendees should be provided! The maximum number of attendees we can accommodate is 10"
        }
        validate={validateSize}
      >
        <input id="guests" type="number" min={1} max={10} />
      </InputField>
      <InputField
        inputID={"occasion"}
        text={"Occasion"}
        required={true}
        error={null}
        validate={() => true}
      >
        <select id="occasion">
          <option value="general">General</option>
          <option value="birthday">Birthday</option>
          <option value="anniversary">Anniversary</option>
        </select>
      </InputField>
      <InputField
        inputID={"message"}
        text={"Message"}
        required={false}
        error={null}
        validate={() => true}
      >
        <input id="message" type="comment" min={1} max={10} />
      </InputField>
      <button
        type="submit"
        disabled={!(isNameValid && isEmailValid && isDateValid && isSizeValid)}
      >
        Submit
      </button>
    </form>
  );
};
