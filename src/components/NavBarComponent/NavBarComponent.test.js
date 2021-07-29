import { render, screen } from '@testing-library/react';
import NavBarComponent from './NavBarComponent';
import { MemoryRouter } from 'react-router-dom';

describe('NavBarComponent', () => {
  it('renders default form acording to snapshot', () => {
    const { asFragment } = render(
      <MemoryRouter>
        <NavBarComponent />
      </MemoryRouter>,
    );
    expect(asFragment(<NavBarComponent />)).toMatchSnapshot();
  });
});
