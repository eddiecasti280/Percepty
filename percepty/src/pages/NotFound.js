import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/NotFound.css';

function NotFound() {
  return (
    <div className="not-found-page">
      <div className="not-found-img">
        <img
          src={process.env.PUBLIC_URL + '/404_img.svg'}
          alt="Page not found illustration"
        />
      </div>
      <h1>404</h1>
      <p>
        The page you're looking for doesn't exist — it may have been moved
        or you may have mistyped the address.
      </p>
      <Link to="/" className="btn btn-primary">Back to Home</Link>
    </div>
  );
}

export default NotFound;