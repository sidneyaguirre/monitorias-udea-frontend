import React, { Component } from "react";
import "../styles/Home.scss";

class Home extends Component {
  render() {
    return (
      <div>
        <div className="row title justify-content-md-center text-white bg-primary">
          <div className="column">
            <p className="is-open-sans is-font-weight-500 ">Calendario</p>
          </div>
        </div>
        <div className="row justify-content-md-center">
          <div className="column">
            <iframe
              title="calendar"
              src="https://calendar.google.com/calendar/b/1/embed?height=600&amp;wkst=2&amp;bgcolor=%230a351c&amp;ctz=America%2FBogota&amp;src=dWRlYS5lZHUuY29fZGZuZmUwNW8yaDY3Y2M4aGVtOTRxaG1kcmdAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&amp;color=%239E69AF&amp;showTitle=0&amp;showPrint=0&amp;showTabs=1&amp;showCalendars=1&amp;mode=MONTH&amp;title=Todos%20los%20cursos&amp;showNav=1&amp;showTz=0"
              style={{ borderWidth: 0 }}
              width="900"
              height="500"
              frameborder="0"
              scrolling="no"
            ></iframe>
            <iframe
              src="https://calendar.google.com/calendar/embed?src=dWRlYS5lZHUuY29fZGZuZmUwNW8yaDY3Y2M4aGVtOTRxaG1kcmdAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&ctz=America%2FBogota"
              style={{ borderWidth: 0 }}
              width="800"
              height="600"
              frameborder="0"
              scrolling="no"
            ></iframe>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
