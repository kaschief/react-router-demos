import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect
} from 'react-router-dom';

const Admin = () => {
  return (
    <div className="jumbotron">
      <h3 className="display-3">Admin Access granted</h3>
    </div>
  );
};

export default Admin;
