import { render, screen } from '@testing-library/react';
import Footer from './Footer';
import { MemoryRouter } from 'react-router-dom';

describe('Footer', () => {
  it('renders default form according to snapshot', () => {
    const { asFragment } = render(
      <MemoryRouter>
        <Footer />
      </MemoryRouter>,
    );
    expect(asFragment(<Footer />)).toMatchSnapshot();
  });
});
