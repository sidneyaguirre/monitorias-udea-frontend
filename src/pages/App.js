import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import Home from "./Home";
import TutorNew from "./Tutor/TutorNew";
import CourseTutorNew from "./Tutor/CourseTutorNew"
import TutoryDetails from "./Tutory/TutoryDetails";
import Schedule from "./Schedule/Schedule"
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
              <Route exact path="/tutor/add-course" component={CourseTutorNew} />
              <Route exact path="/tutory/details" component={TutoryDetails} />
              <Route exact path="/schedule" component={Schedule}/>
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
