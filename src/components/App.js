import React from "react";
import { Routes, Route } from 'react-router-dom';

// import LoginWrap from './login/LoginWrap';
// import LOGIN from '../routes/login';
import ErrorWrap from './error/ErrorWrap';
import NOT_FOUND_CONTENT from '../routes/notFoundContent';

const App = () => {
  return (
    <div id="App" className="d-flex align-items-center justify-content-center">
      <Routes>
        {/* <Route path={ LOGIN } element={ <LoginWrap /> } /> */}
        <Route path={ NOT_FOUND_CONTENT } element={ <ErrorWrap /> } />
      </Routes>
    </div>
  );
}

export default App;
