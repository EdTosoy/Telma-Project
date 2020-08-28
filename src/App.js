import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import "./App.css";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import HomePage from "./Pages/Home/HomePage";
import AboutPage from "./Pages/About/AboutPage";
import SubsidiariesPage from "./Pages/Subsidiaries/SubsidiariesPage";
import RemitStatusPage from "./Pages/RemitStatus/RemitStatusPage";
import RegisterPage from "./Pages/Register/RegisterPage";

function App() {
  return (
    <Router>
      <Header />

      <Switch>
        <Route exact path="/home" component={HomePage} />
        <Route exact path="/about" component={AboutPage} />
        <Route exact path="/subsidiaries" component={SubsidiariesPage} />
        <Route exact path="/status" component={RemitStatusPage} />
        <Route exact path="/register" component={RegisterPage} />
        <Route path="/">
          <Redirect to="/home" />
        </Route>
      </Switch>

      <Footer />
    </Router>
  );
}

export default App;
