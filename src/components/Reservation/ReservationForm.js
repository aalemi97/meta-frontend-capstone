import { useReducer } from "react";
import { InputField } from "./InputField";
import { createInitialState, reducer } from "./FormData.ts";
import {
  validateName,
  validateEmail,
  validateDate,
  validateSize,
} from "../../utilities/utils.ts";
import "./index.css";

export const ReservationForm = ({ availableTimes, onSlotSelection }) => {
  const [state, dispatch] = useReducer(reducer, createInitialState());

  const onChangeName = (event) => {
    const value = event.target.value;
    dispatch({
      type: "set_name",
      object: {
        ...state.name,
        value: value,
        valid: validateName(value),
      },
    });
  };

  const onBlurName = () => {
    dispatch({
      type: "set_name",
      object: {
        ...state.name,
        touched: true,
      },
    });
  };

  const onChangeEmail = (event) => {
    const value = event.target.value;
    dispatch({
      type: "set_email",
      object: {
        ...state.email,
        value: value,
        valid: validateEmail(value),
      },
    });
  };

  const onBlurEmail = () => {
    dispatch({
      type: "set_email",
      object: {
        ...state.email,
        touched: true,
      },
    });
  };

  const onChangeDate = (event) => {
    const value = event.target.value;
    dispatch({
      type: "set_date",
      object: {
        ...state.date,
        value: value,
        valid: validateDate(value),
      },
    });
  };

  const onBlurDate = () => {
    dispatch({
      type: "set_date",
      object: {
        ...state.date,
        touched: true,
      },
    });
  };

  const onChangeTime = (event) => {
    const value = event.target.value;
    dispatch({
      type: "set_time",
      object: {
        ...state.time,
        value: value,
        valid: true,
      },
    });
  };

  const onChangeSize = (event) => {
    const value = event.target.value;
    dispatch({
      type: "set_size",
      object: {
        ...state.size,
        value: value,
        valid: validateSize(value),
      },
    });
  };

  const onBlurSize = () => {
    dispatch({
      type: "set_size",
      object: {
        ...state.size,
        touched: true,
      },
    });
  };

  const onChangeOccasion = (event) => {
    const value = event.target.value;
    dispatch({
      type: "set_occasion",
      object: {
        ...state.occasion,
        value: value,
        valid: true,
      },
    });
  };

  const onChangeMessage = (event) => {
    const value = event.target.value;
    dispatch({
      type: "set_message",
      object: {
        ...state.message,
        value: value,
        valid: true,
      },
    });
  };

  function handleSubmit(event) {
    event.preventDefault();
    dispatch({ type: "reset", object: null });
  }

  return (
    <form className="container" onSubmit={handleSubmit}>
      <h2>Make a reservation</h2>
      <InputField
        inputID={"name"}
        text={"Name"}
        required={true}
        error={
          "Please enter a valid name! The name should contain at least three characters."
        }
        showError={state.name.touched && !state.name.valid}
      >
        <input
          id="name"
          type="text"
          placeholder="Full Name"
          value={state.name.value}
          onChange={onChangeName}
          onBlur={onBlurName}
          minLength={3}
          maxLength={50}
        />
      </InputField>
      <InputField
        inputID={"email"}
        text={"Email Address"}
        required={true}
        error={"Please enter a valid email address!"}
        showError={state.email.touched && !state.email.valid}
      >
        <input
          id="email"
          type="email"
          placeholder="example@example.ca"
          value={state.email.value}
          onChange={onChangeEmail}
          onBlur={onBlurEmail}
        />
      </InputField>
      <InputField
        inputID={"date"}
        text={"Date"}
        required={true}
        error={
          "Please enter a valid date! We cannot reserve a table for past days or for a day which is not within 7 days from today."
        }
        showError={state.date.touched && !state.date.valid}
      >
        <input
          id="date"
          type="date"
          value={state.date.value}
          onChange={onChangeDate}
          onBlur={onBlurDate}
        />
      </InputField>
      <InputField
        inputID={"time"}
        text={"Time"}
        required={true}
        error={"Please select an available time slot!"}
        showError={state.time.touched && !state.time.valid}
      >
        <select id="time" onChange={onChangeTime}>
          {availableTimes.map((time) => (
            <option key={time} value={time}>
              {time}
            </option>
          ))}
        </select>
      </InputField>
      <InputField
        inputID={"size"}
        text={"Number of Guests"}
        required={true}
        error={
          "Number of guests should be provided! The maximum number of attendees we can accommodate is 10"
        }
        showError={state.size.touched && !state.size.valid}
      >
        <input
          id="size"
          type="number"
          value={state.size.value}
          onChange={onChangeSize}
          onBlur={onBlurSize}
          min={1}
          max={10}
        />
      </InputField>
      <InputField
        inputID={"occasion"}
        text={"Occasion"}
        required={true}
        error={null}
        showError={state.occasion.touched && !state.occasion.valid}
      >
        <select id="occasion" onChange={onChangeOccasion}>
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
        showError={state.message.touched && !state.message.valid}
      >
        <input
          id="message"
          type="comment"
          value={state.message.value}
          onChange={onChangeMessage}
          min={1}
          max={10}
        />
      </InputField>
      <button
        type="submit"
        disabled={
          !(
            state.name.valid &&
            state.email.valid &&
            state.date.valid &&
            state.size.valid
          )
        }
      >
        Submit
      </button>
    </form>
  );
};
