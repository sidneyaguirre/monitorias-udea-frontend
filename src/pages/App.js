import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import Home from "./Home";
import TutorNew from "./Tutor/TutorNew";
import TutoryDetails from "./Tutory/TutoryDetails";

function App() {
  return (
    <div className="App">
      <div className="App__body">
        <BrowserRouter>
          <div>
            <Header />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/tutor/new" component={TutorNew} />
              <Route exact path="/tutory/details" component={TutoryDetails} />
            </Switch>
            <Footer />
          </div>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
