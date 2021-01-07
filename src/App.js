import { Container } from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import NavBar from './components/NavBar';

import LandingPage from './pages/LandingPage';
import Menu from './pages/Menu';
import SignIn from './pages/SignIn';
import JoinNow from './pages/JoinNow';
import Home from './pages/Home';
import Apply from './pages/Apply';
import PageNotFound from './pages/PageNotFound';

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
          <Route path='/menu' exact>
            <Menu />
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
          <Route>
            <PageNotFound />
          </Route>
        </Switch>
      </Container>
    </Router>
  );
}
