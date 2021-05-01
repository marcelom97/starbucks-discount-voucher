import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { AuthContext } from './context';

import NavBar from './components/NavBar';

import LandingPage from './pages/LandingPage';
import Admin from './pages/Admin';
import AdminPanel from './pages/AdminPanel';
import Apply from './pages/Apply';
import PageNotFound from './pages/PageNotFound';
import ActivateVoucher from './pages/ActivateVoucher';
import VoucherResults from './pages/VoucherResults';

export default function App() {
  const [loggedIn, setLoggedIn] = React.useState(false);
  const [token, setToken] = React.useState(false);
  const [refreshToken, setRefreshToken] = React.useState(false);

  return (
    <Router>
      <AuthContext.Provider
        value={{
          loggedIn,
          setLoggedIn,
          token,
          setToken,
          refreshToken,
          setRefreshToken,
        }}
      >
        <div className='text-green-700 bg-yellow-50 min-h-screen'>
          <div className='container mx-auto'>
            <NavBar />
            <Switch>
              <Route path='/' exact>
                <LandingPage />
              </Route>
              <Route path='/admin' exact>
                <Admin />
              </Route>
              <Route path='/adminpanel' exact>
                <AdminPanel />
              </Route>
              <Route path='/apply' exact>
                <Apply />
              </Route>
              <Route path='/activatevoucher' exact>
                <ActivateVoucher />
              </Route>
              <Route path='/voucherresults' exact>
                <VoucherResults />
              </Route>
              <Route>
                <PageNotFound />
              </Route>
            </Switch>
          </div>
        </div>
      </AuthContext.Provider>
    </Router>
  );
}
