import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { BrowserRouter as Router } from 'react-router-dom';

ReactDOM.render(
  // ---------------------------------------------- basename set for GH Pages to work
  <Router basename='/React-Appointment-Planner'>
    <App />
  </Router>,
  document.getElementById('root')
);
