import { render, screen } from '@testing-library/react';
import NotFound from './Landing';
import { MemoryRouter } from 'react-router-dom';

describe('NotFoundSection', () => {
  it('renders default form according to snapshot', () => {
    const { asFragment } = render(
      <MemoryRouter>
        <NotFound />
      </MemoryRouter>,
    );
    expect(asFragment(<NotFound />)).toMatchSnapshot();
  });
});
