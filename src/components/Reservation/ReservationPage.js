import { useReducer } from "react";
import { ReservationForm } from "./ReservationForm";
import "./index.css";

export function updateTimes(state, slot) {
  return state;
}
export function initializeTimes() {
  const currentTime = new Date().getHours() + 1;
  let length;
  if (currentTime < 10) {
    length = 14;
  } else {
    length = 23 - currentTime + 1;
  }
  return Array.from({ length: length }, (value, index) => index).map(
    (value) => `${value + currentTime}:00`
  );
}

export const ReservationPage = () => {
  const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes());
  return (
    <ReservationForm
      availableTimes={availableTimes}
      onSlotSelection={(time) => dispatch(time)}
    />
  );
};
