import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Home from "./pages/Home"


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/search">
            <h1>this is search page</h1>
          </Route>
          <Route path="/">
          <Home />
          </Route>
        </Switch>
      </Router>
      {/* Search Page (The result page) */}
    </div>
  );
}

export default App;
