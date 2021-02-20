import React from 'react';

import {BrowserRouter as Router, Route,  Switch} from 'react-router-dom';

//komponen Registrasi
import Registrasi from "./pages/registrasi";
import Unknown from './pages/unknown';
import Login from './pages/login';
import PasswordForget from './pages/password-forget';
import Private from './pages/private';
import PrivateRoute from './component/PrivateRoute';
function App() {
  return (
    <Router>
      <Switch>
        <PrivateRoute path="/" exact component={Private}/>
        <PrivateRoute path="/pengaturan" component={Private}/>
        <PrivateRoute path="/produk" component={Private}/>
        <PrivateRoute path="/transaksi" component={Private}/>
        <Route path="/registrasi" component={Registrasi}/>
        <Route path="/login" component={Login}/>
        <Route path="/password-forget" component={PasswordForget}/>
        <Route component={Unknown}/>
      </Switch>
    </Router>
  );
}

export default App;
