import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Header from "../components/Header";
import Footer from "../components/Footer";
import Home from "./Home";
import TutorNew from "./TutorNew";
import TutoryDetails from "./TutoryDetails";
import NewStudent from "./Student/NewStudent";

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
              <Route exact path="/student/new" component={NewStudent}/>
            </Switch>
            <Footer />
          </div>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
