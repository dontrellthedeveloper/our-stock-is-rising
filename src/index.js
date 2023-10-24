import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom";
import ScrollToTop from "./helper/ScrollToTop";

// import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";

import './index.css';
import App from './App';

ReactDOM.render(
      <Router>
        <ScrollToTop />
        <App />
      </Router>,
  document.getElementById('root')
);


