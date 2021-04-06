import logo from "./logo.svg";
import "./App.css";
import Layout from "./layout";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import SignIn from "./component/SignIn";
import SignUp from "./component/SignUp";
import PrivateAuth from "./component/PrivateAuth";
import NoMatch from "./component/PageNot";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/sign-in" component={SignIn} />
        <Route path="/sign-up" component={SignUp} />
        <PrivateAuth path="/home" component={Layout} />
        <Route path="*"> <NoMatch /> </Route>
      </Switch>
    </Router>
  );
}

export default App;
