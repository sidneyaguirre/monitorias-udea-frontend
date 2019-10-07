import React, { Component } from "react";
import "../styles/Home.scss";
import FullCalendar from '@fullcalendar/react'
import googleCalendarPlugin from '@fullcalendar/google-calendar';
import dayGridPlugin from '@fullcalendar/daygrid'
import bootstrapPlugin from '@fullcalendar/bootstrap';
class Home extends Component {

  state= {
    events: {
      googleCalendarId: 'udea.edu.co_dfnfe05o2h67cc8hem94qhmdrg@group.calendar.google.com',
      className: 'gcal-event'
    }
  }

  render() {
    return (
      <div>
        <div className="row title justify-content-md-center text-white bg-primary">
          <div className="column">
            <p className="is-open-sans is-font-weight-500 ">Calendario</p>
          </div>
        </div>
        <div className="row justify-content-md-center my-4 py-4">
          <div className="column">
            
                <FullCalendar 
                height={550}
                width={450}
                className='bg-light'
                googleCalendarApiKey="AIzaSyAB8stIFlYsrJ_v4fXfLkn4k58D-0d_3kY"
                defaultView="dayGridMonth" 
                googleCalendarId = "udea.edu.co_dfnfe05o2h67cc8hem94qhmdrg@group.calendar.google.com"
                events={this.state.events}
                plugins={[googleCalendarPlugin, dayGridPlugin, bootstrapPlugin ]}
                
                  />
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
