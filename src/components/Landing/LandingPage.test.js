import { render, screen } from '@testing-library/react';
import Landing from './Landing';
import { MemoryRouter } from 'react-router-dom';

describe('LandingSection', () => {
  it('renders default form according to snapshot', () => {
    const { asFragment } = render(
      <MemoryRouter>
        <Landing />
      </MemoryRouter>,
    );
    expect(asFragment(<Landing />)).toMatchSnapshot();
  });
});
