import { useReducer } from "react";
import { InputField } from "./InputField";
import { createInitialState, reducer } from "./FormData.ts";
import "./index.css";

export const ReservationForm = ({ availableTimes, onSlotSelection }) => {
  const [state, dispatch] = useReducer(reducer, createInitialState(null));
  function handleSubmit(event) {
    event.preventDefault();
    onSlotSelection(state.time.value);
    dispatch({
      type: "reset",
      value: availableTimes[0],
    });
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
          onChange={(event) => {
            dispatch({ type: "set_name", value: event.target.value });
          }}
          onBlur={() => dispatch({ type: "set_touched", value: "name" })}
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
          onChange={(event) => {
            dispatch({ type: "set_email", value: event.target.value });
          }}
          onBlur={() => dispatch({ type: "set_touched", value: "email" })}
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
          onChange={(event) => {
            dispatch({ type: "set_date", value: event.target.value });
          }}
          onBlur={() => dispatch({ type: "set_touched", value: "date" })}
        />
      </InputField>
      <InputField
        inputID={"time"}
        text={"Time"}
        required={true}
        error={"Please select an available time slot!"}
        showError={state.time.touched && !state.time.valid}
      >
        <select
          id="time"
          value={state.time.value}
          onChange={(event) => {
            dispatch({ type: "set_time", value: event.target.value });
          }}
        >
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
          onChange={(event) => {
            dispatch({ type: "set_size", value: event.target.value });
          }}
          onBlur={() => dispatch({ type: "set_touched", value: "size" })}
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
        <select
          id="occasion"
          value={state.occasion.value}
          onChange={(event) => {
            dispatch({ type: "set_occasion", value: event.target.value });
          }}
        >
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
          onChange={(event) => {
            dispatch({ type: "set_message", value: event.target.value });
          }}
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
