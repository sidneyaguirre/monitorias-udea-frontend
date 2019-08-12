import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Header from "../components/Header";
import Footer from "../components/Footer";
import Home from "./Home";
import TutorNew from "./TutorNew"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div>
          <Header />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/tutor/new" component={TutorNew} />
          </Switch>
          <Footer />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
