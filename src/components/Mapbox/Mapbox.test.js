import { render } from '@testing-library/react';
import Mapbox from './Mapbox';


describe('Mapbox Component', () => {
  it('renders default form acording to snapshot', () => {
    const { asFragment } = render(<Mapbox />);
    expect(asFragment(<Mapbox />)).toMatchSnapshot();
  });
});
