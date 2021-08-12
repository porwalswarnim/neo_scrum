import React from "react";

import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Link,
} from "react-router-dom";
import LoginPage from "./loginPage/LoginPage";
import RegistrationPage from "./registrationPage/RegistrationPage";
import FeedbackPage from "./feedbackPage/FeedbackPage";
import FeedbackAdd from "./feedbackAdd/FeedbackAdd";
import "./App.css";

function App(props) {
  return (
    <Router>
      <div
        className="imagediv"
        style={{
          backgroundImage: `url("loginbackground.jpg")`,
        }}
      >
        <Route exact path="/" component={() => <Redirect to="/login" />} />
        <Link to="/login"></Link>
        <Link to="/registration"></Link>
        <Link to="/feedback"></Link>
        <Link to="/feedbackAdd"></Link>
        <Route exact path="/login" component={LoginPage} />
        <Route path="/registration" component={RegistrationPage} />
        <Route path="/feedback" component={FeedbackPage}  />
        <Route path="/feedbackAdd" component={FeedbackAdd} />
      </div>
    </Router>
  );
}

export default App;
