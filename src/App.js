import './App.css';
import {
  Redirect,
  Switch,
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import Home from './components/Home/Home';
import Cart from './components/Cart/Cart';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/cart" component={Cart} />
          <Redirect to="/" />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
