import React, { Component } from "react";
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'

class FullCalendarU extends Component {
  render() {
    return (
      <div>

      <FullCalendar 
      defaultView="dayGridMonth" 
      event={this.props.events}
      plugins={[ dayGridPlugin ]} />
      </div>
    );
  }
}

export default FullCalendarU;
