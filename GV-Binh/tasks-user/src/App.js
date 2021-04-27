import logo from "./logo.svg";
import "./App.css";
import Layout from "./layout";
import { Router, Switch, Route, Link } from "react-router-dom";
import SignIn from "./component/SignIn";
import SignUp from "./component/SignUp";
import PrivateAuth from "./component/PrivateAuth";
import { history } from './helps/history';

function App() {
  return (
    <Router history={history}>
      <Switch>
        <PrivateAuth exact path="/" component={Layout} />
        <Route path="/sign-up" component={SignUp} />
        <Route path="/sign-in" component={SignIn} />
        {/* <Route path="*"> <NoMatch /> </Route> */}
      </Switch>
    </Router>
  );
}

export default App;
