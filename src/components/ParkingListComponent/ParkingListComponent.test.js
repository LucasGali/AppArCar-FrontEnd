import { render, screen, fireEvent } from '@testing-library/react';
import ParkingListComponent from "./ParkingListComponent"

describe("Parking List Component", () => {
  it("Renders table according to snapshot", () => {
    const { asFragment } = render(<ParkingListComponent />);
    expect(asFragment(<ParkingListComponent />)).toMatchSnapshot();
  })
})
