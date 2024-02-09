import { render, screen } from "@testing-library/react";
import { ReservationForm } from "./components/Reservation/ReservationForm";

test("Renders the ReservationForm heading", () => {
  render(
    <ReservationForm
      availableTimes={["19:00", "21:00"]}
      onSlotSelection={null}
    />
  );
  const headingElement = screen.getByText("Make a reservation");
  expect(headingElement).toBeInTheDocument();
});
