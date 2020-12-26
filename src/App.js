import NavBar from './components/NavBar';
import { Container } from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';

import './App.css';

export default function App() {
  return (
    <Router>
      <Container>
        <NavBar />
        <Switch>
          <Route path='/'>
            <LandingPage />
          </Route>
        </Switch>
      </Container>
    </Router>
  );
}
