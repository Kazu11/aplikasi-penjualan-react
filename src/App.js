import React from 'react';

import {BrowserRouter as Router, Route,  Switch} from 'react-router-dom';
import Login from './pages/login';
import PasswordForget from './pages/password-forget';
import Private from './pages/private';


//komponen Registrasi
import Registrasi from "./pages/registrasi";
import Unknown from './pages/unknown';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/pengaturan" component={Private}/>
        <Route path="/registrasi" component={Registrasi}/>
        <Route path="/login" component={Login}/>
        <Route path="/password-forget" component={PasswordForget}/>
        <Route component={Unknown}/>
      </Switch>
    </Router>
  );
}

export default App;
