import React from 'react';
import { Routes, Route } from 'react-router-dom';

import LoginWrap from './login/LoginWrap';
import ErrorWrap from './error/ErrorWrap';
import ContentWrap from './content/ContentWrap';
import RegSuccessPopup from './login/RegSuccessPopup';
import { routes } from '../globalConstants';
import ProtectedRoutes from './ProtectedRoutes';
import '../styles/media.css';
import '../styles/placeholder.css';
import '../styles/validation.css';

const App = () => {
  //console.log('app');
  return (
    <div id="App" className="d-flex flex-column w-100 h-100">
      <RegSuccessPopup />
      <Routes>
        <Route element={ <ProtectedRoutes /> }>
          <Route path={ routes.main } element={ <ContentWrap /> } />
          <Route path={ routes.search } element={ <ContentWrap /> } />
          <Route path={ routes.users } element={ <ContentWrap /> } />
          <Route path={ routes.settings } element={ <ContentWrap /> } />
          <Route path={ routes.create } element={ <ContentWrap /> } />
          <Route path={ routes.liked } element={ <ContentWrap /> } />
          <Route path={ routes.post } element={ <ContentWrap /> } />
          <Route path={ routes.auth } element={ <LoginWrap /> } />
        </Route>
        <Route path={ routes.not_found } element={ <ErrorWrap /> } />
      </Routes>
    </div>
  );
}

export default App;
