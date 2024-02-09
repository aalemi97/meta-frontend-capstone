import { render, screen } from "@testing-library/react";
import {
  ReservationPage,
  initializeTimes,
  updateTimes,
} from "./components/Reservation/ReservationPage";

test("initializeTimes function", () => {
  const times = initializeTimes().map((time) => parseInt(time.split(":")[0]));
  const current = new Date().getHours() + 1;
  expect(times.filter((time) => time >= current)).toEqual(times);
});

test("updateTimes function", () => {
  const times = initializeTimes();
  const slot = `${new Date().getHours() + 1}:00`;
  const index = times.indexOf(slot);
  times.splice(index, 1);
  expect(updateTimes(initializeTimes(), slot)).toEqual(times);
});
