import React, { useState } from "react";

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

const App = () => {
  const [feedback, setFeedback] = useState([]);
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
        <Route exact path="/login"  render={() => <LoginPage setFeedback={setFeedback} />} />
        <Route path="/registration" component={RegistrationPage} />
        <Route
          path="/feedback"
          render={() => <FeedbackPage feedback={feedback} />}
        />
        {/* <Route path="/feedback" component={() => <FeedbackPage(feedback)}  /> */}
        <Route path="/feedbackAdd" component={FeedbackAdd} />
      </div>
    </Router>
  );
};

export default App;
