import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Alert from './Alert';
import '@testing-library/jest-dom/extend-expect';

describe('Alert', () => {
  const errorMessage = 'This is an error';

  it('render content successfully', () => {
    render(<Alert errorMessage={errorMessage} />);
    const msg = screen.getByTestId('alert-msg')
    expect(msg).toBeInTheDocument();
    expect(msg).toHaveTextContent('This is an error');
  });

  it('check if there is a btn inside the modal', () => {
    const { getByTestId } = render(
      <Alert errorMessage={errorMessage} />,
    );
    expect(getByTestId('alert-btn')).toBeInTheDocument();
  });

  it('check if fn is trigger on click to close modal', () => {
    const spyFunction = jest.fn();
    const { getByTestId } = render(
      <Alert errorMessage={errorMessage} hideError={spyFunction} />,
    );
    fireEvent.click(getByTestId('alert-btn'));
    expect(spyFunction).toHaveBeenCalledTimes(1);
    expect(spyFunction).toHaveBeenCalledWith(null);
   });

  it('snapshot comparison', () => {
    const { asFragment } = render(<Alert errorMessage={errorMessage} />);
    expect(asFragment(<Alert />)).toMatchSnapshot();
  });
});
