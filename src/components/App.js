import React from "react";
import { Routes, Route } from 'react-router-dom';

import LoginWrap from './login/LoginWrap';
import LOGIN from '../routes/login';
import ErrorWrap from './error/ErrorWrap';
import NOT_FOUND_CONTENT from '../routes/notFoundContent';
import '../styles/media.css';
import '../styles/placeholder.css';

const App = () => {
  return (
    <div id="App" className="d-flex flex-column w-100 h-100">
      <Routes>
        <Route path={ LOGIN } element={ <LoginWrap /> } />
        <Route path={ NOT_FOUND_CONTENT } element={ <ErrorWrap /> } />
      </Routes>
    </div>
  );
}

export default App;
