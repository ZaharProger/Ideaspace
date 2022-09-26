import React from 'react';
import { Routes, Route } from 'react-router-dom';

import LoginWrap from './login/LoginWrap';
import AUTH from "../routes/auth";
import ErrorWrap from './error/ErrorWrap';
import NOT_FOUND_CONTENT from '../routes/notFoundContent';
import ContentWrap from './content/ContentWrap';
import MAIN from '../routes/main';
import '../styles/media.css';
import '../styles/placeholder.css';

const App = () => {
  return (
    <div id="App" className="d-flex flex-column w-100 h-100">
      <Routes>
        <Route path={ MAIN } element={ <ContentWrap /> } />
        <Route path={ AUTH } element={ <LoginWrap /> } />
        <Route path={ NOT_FOUND_CONTENT } element={ <ErrorWrap /> } />
      </Routes>
    </div>
  );
}

export default App;
