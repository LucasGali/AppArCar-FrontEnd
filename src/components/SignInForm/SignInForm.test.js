import { render, screen, fireEvent } from '@testing-library/react';
import SignInForm from "./SignInForm"

describe("SignInForm", () => {
  it("Renders default form according to snapshot", () => {
    const { asFragment } = render(<SignInForm />);
    expect(asFragment(<SignInForm />)).toMatchSnapshot()
  })
})

describe("Eye function", () => {
  it("Show input type change", () => {
    const { getByTestId } = render(<SignInForm />);
    fireEvent.click(getByTestId("eyetest"));
    expect(getByTestId('passtest')).toHaveAttribute("type", "text");
    fireEvent.click(getByTestId('eyetest'));
    expect(getByTestId('passtest')).toHaveAttribute('type', 'password');
  })
})

