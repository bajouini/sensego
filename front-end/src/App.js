import React from "react";
import Home from './home'
import { BrowserRouter as Router, Route } from "react-router-dom";

const App = () => (
  <Router>
    <div>
      <Route exact path="/" component={Home} />
    </div>
  </Router>
)
export default App;