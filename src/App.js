import { Container } from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import NavBar from './components/NavBar';

import LandingPage from './pages/LandingPage';
import SignIn from './pages/SignIn';
import JoinNow from './pages/JoinNow';
import Home from './pages/Home';
import Apply from './pages/Apply';
import PageNotFound from './pages/PageNotFound';
import SuccessApplication from './pages/SuccessApplication';
import FailedApplication from './pages/FailedApplication';
import AdminPanel from './pages/AdminPanel';
import ActivateVoucher from './pages/ActivateVoucher';
import VoucherResults from './pages/VoucherResults';

import './App.css';

export default function App() {
  return (
    <Router>
      <Container>
        <NavBar />
        <Switch>
          <Route path='/' exact>
            <LandingPage />
          </Route>
          <Route path='/signin' exact>
            <SignIn />
          </Route>
          <Route path='/joinnow' exact>
            <JoinNow />
          </Route>
          <Route path='/home' exact>
            <Home />
          </Route>
          <Route path='/apply' exact>
            <Apply />
          </Route>
          <Route path='/successapplication' exact>
            <SuccessApplication />
          </Route>
          <Route path='/failedapplication' exact>
            <FailedApplication />
          </Route>
          <Route path='/adminpanel' exact>
            <AdminPanel />
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
      </Container>
    </Router>
  );
}
