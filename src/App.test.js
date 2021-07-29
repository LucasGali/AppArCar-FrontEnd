import { render, screen } from '@testing-library/react';
import App from './App';

describe('App', () => {
  it.skip('renders menu', () => {
    const { getByTestId } = render(<App />);
    // expect(getByTestId('home-link')).toHaveTextContent('Home');
    // expect(getByTestId('map-link')).toHaveTextContent('Map');
    // expect(getByTestId('profile-link')).toHaveTextContent('Profile');
  });

})
