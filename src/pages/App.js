import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Header from "../components/Header";
import Footer from "../components/Footer";
import Home from "./Home";
import TutorNew from "./TutorNew";
import TutoryDetails from "./TutoryDetails";
import NewStudent from "./Student/NewStudent";
import "../styles/App.scss";


function App() {
  return (
    <div className="App">
      <div className="App__body">
        <BrowserRouter>
          <div>
            <Header />
            <div className="container-height">
            <Switch >
              <Route exact path="/" component={Home} />
              <Route exact path="/tutor/new" component={TutorNew} />
              <Route exact path="/tutory/details" component={TutoryDetails} />
              <Route exact path="/student/new" component={NewStudent}/>
            </Switch>
            </div>
            <Footer />
          </div>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
