import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";

import NewStudent from "./pages/Student/NewStudent";
import Home from "./pages/Home";
import TutorNew from "./pages/Tutor/TutorNew";
import TutoryNew from "./pages/Tutory/TutoryNew";
import TutoryDetails from "./pages/Tutory/TutoryDetails";

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
              <Route exact path="/tutory/new" component={TutoryNew} />
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
