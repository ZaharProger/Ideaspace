import React from 'react';
import { Routes, Route } from 'react-router-dom';

import LoginWrap from './login/LoginWrap';
import ErrorWrap from './error/ErrorWrap';
import ContentWrap from './content/ContentWrap';
import { routes } from '../globalConstants';
import '../styles/media.css';
import '../styles/placeholder.css';

const App = () => {
  //console.log('app');
  return (
    <div id="App" className="d-flex flex-column w-100 h-100">
      <Routes>
        <Route path={ routes.main } element={ <ContentWrap show_profile={ false } /> } />
        <Route path={ routes.auth } element={ <LoginWrap /> } />
        <Route path={ routes.settings } element={ <ContentWrap show_profile={ true } /> } />
        <Route path={ routes.not_found } element={ <ErrorWrap /> } />
      </Routes>
    </div>
  );
}

export default App;
