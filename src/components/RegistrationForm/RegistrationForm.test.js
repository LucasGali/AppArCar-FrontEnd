import { render, fireEvent, cleanup } from '@testing-library/react';
import RegistrationForm from './RegistrationForm';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import rootReducer from '../../reducers';

const initialState = {};

const renderWithRedux = (component, {initialState, store = createStore(rootReducer, initialState)} = {} ) => (
  {
    ...render(<Provider store={store}>{component}</Provider>),
    store
  }
)

describe('RegistrationForm', () => {
  afterEach(cleanup);

  it('renders default form according to snapshot', () => {
    const { asFragment } = renderWithRedux(<RegistrationForm />);
    expect(asFragment(<RegistrationForm />)).toMatchSnapshot()
  });

  it('empty email fails email validation', () => {
    const showErrorSpy = jest.fn();
    const { getByTestId } = renderWithRedux(<RegistrationForm showError={showErrorSpy} />);
    fireEvent.click( getByTestId('submit-registration') );
    expect(showErrorSpy).toHaveBeenCalledWith("Por favor ingrese un mail valido");
  });

  it('non valid email format fails validation', () => {
    const showErrorSpy = jest.fn();
    const { getByTestId } = renderWithRedux(<RegistrationForm showError={showErrorSpy} />);
    fireEvent.change( getByTestId('input-email'), {target : { value: 'nonValidEmail'}} );
    fireEvent.click( getByTestId('submit-registration') );
    expect(showErrorSpy).toHaveBeenCalledWith("Por favor ingrese un mail valido");
  });

  it('password different from confirmation fails', () => {
    const showErrorSpy = jest.fn();
    const { getByTestId } = renderWithRedux(<RegistrationForm showError={showErrorSpy} />);
    fireEvent.change( getByTestId('input-password'), {target : { value: 'password1'}} );
    fireEvent.change( getByTestId('input-password-confirm'), {target : { value: 'password2'}} );
    fireEvent.click( getByTestId('submit-registration') );
    expect(showErrorSpy).toHaveBeenCalledWith("La contraseña es distinta a la confirmada");
  });

  it('short password fails', () => {
    const showErrorSpy = jest.fn();
    const { getByTestId } = renderWithRedux(<RegistrationForm showError={showErrorSpy} />);
    fireEvent.change( getByTestId('input-password'), {target : { value: 'pass1'}} );
    fireEvent.change( getByTestId('input-password-confirm'), {target : { value: 'pass1'}} );
    fireEvent.click( getByTestId('submit-registration') );
    expect(showErrorSpy).toHaveBeenCalledWith("Por favor ingrese una contraseña de al menos 6 caracteres");
  });
});
