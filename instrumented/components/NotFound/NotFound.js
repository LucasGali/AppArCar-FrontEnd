import React from 'react';
import { connect } from 'react-redux';
import iconSet from '../../icons.json';
import { Link } from 'react-router-dom';
import IcomoonReact from 'icomoon-react';
import { useHistory } from 'react-router-dom';
import text from 'utils/text';
import './NotFound.css';

const NotFound = ({ storedUser }) => {
  let history = useHistory();
  const browserCheck = performance.getEntriesByType("navigation")

  if (storedUser.token && browserCheck[0].type === 'reload') {
    history.push('/home');
  } else if (storedUser.token)  {
    setTimeout(() => {
      history.push('/home');
    }, 3000)
  }

  return (
    <div className="not-found-wrapper">
      <IcomoonReact
        iconSet={iconSet}
        color="#444"
        size={100}
        icon="notification"
      />
      <h3>{text.notFound.msg}</h3>
      {
        storedUser.token ? <h1>{text.notFound.redirect}</h1> : <Link to={storedUser.token ? "/home" : "/"} className="footer-link">
        {text.notFound.back}
      </Link>
      }      
    </div>
  );
}

const mapStateToProps = (state) => ({
  storedUser: state.userData,
});

export default connect(mapStateToProps)(NotFound);
