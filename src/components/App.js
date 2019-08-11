import React from "react";
import "./styles/App.css";
import { Home } from "./Home";
import { SidebarMenu } from "./Sidebar";
import { Students } from "./Students"
import { Grid, Segment } from "semantic-ui-react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function App() {
  const routes = [
    {
      path: "/",
      exact: true,
      main: () => <h2>Home</h2>
    },
    {
      path: "/students",
      main: () => <Students></Students>
    }
  ];

  return (
    <div className="App">
      <Router>
        <Grid>
          <Grid.Column stretched width={2}>
            <SidebarMenu />
           
          </Grid.Column>
          <Grid.Column stretched width={14}>
            <Grid.Row>
              <Home />
            </Grid.Row>

            <Grid.Row>
              {/* Here content Router */}
              {routes.map((route, index) => (
                <Route
                  key={index}
                  path={route.path}
                  exact={route.exact}
                  component={route.main}
                />
              ))}
            </Grid.Row>
          </Grid.Column>
        </Grid>
      </Router>
    </div>
  );
}

export default App;
