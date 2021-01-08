import { Container } from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import NavBar from './components/NavBar';

import LandingPage from './pages/LandingPage';
import Admin from './pages/Admin';
import Apply from './pages/Apply';
import PageNotFound from './pages/PageNotFound';
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
          <Route path='/admin' exact>
            <Admin />
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
      </Container>
    </Router>
  );
}
