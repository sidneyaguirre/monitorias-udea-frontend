import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import Home from "./Home";
import TutorNew from "./Tutor/TutorNew";
import TutoryDetails from "./Tutory/TutoryDetails";
import NewStudent from "./Student/NewStudent";
import HomeStudent from "./Student/HomeStudent";
import CourseTutorNew from "./Tutor/CourseTutorNew";

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
              <Route exact path="/tutor/add-course" component={CourseTutorNew} />
              <Route exact path="/tutory/details" component={TutoryDetails} />
              <Route exact path="/student/new" component={NewStudent}/>
              <Route exact path="/student/home" component={HomeStudent}/>
              {/* <Route exact path="/student/tutoryes" component={HomeStudent}/> */}
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
