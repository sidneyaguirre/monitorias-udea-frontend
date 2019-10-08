import axios from 'axios'

export const getCalendarList = async token => {
  const api =
    "https://www.googleapis.com/calendar/v3/users/me/calendarList";
  const headers = {
    "Authorization": "Bearer "+token
  }
  axios.get(api, headers)
  .then( (response) => {
      console.log(response);
  })
  .catch( (error) =>  {
  })
  .finally( () => {
  });

  fetch(api, {
    method: "GET",
    headers: {
      "Authorization": "Bearer "+token
    }
  })
    .then(res => res.json())
    .catch(error => console.error("Error:", error))
    .then(response => console.log("Success:", response));
}

export const getCalendar = async (calendarId, token) => {
  const api =`https://www.googleapis.com/calendar/v3/calendars/${calendarId}`;
  const headers = {
    "Authorization": "Bearer "+token
  }
  axios.get(api, headers)
  .then( (response) => {
      console.log(response);
  })
  .catch( (error) =>  {
  })
  .finally( () => {
  });

  fetch(api, {
    method: "GET",
    headers: {
      "Authorization": "Bearer "+token
    }
  })
    .then(res => res.json())
    .catch(error => console.error("Error:", error))
    .then(response => console.log("Success:", response));
}

export const getEvent = async (eventId, token) => {
  const api =`https://www.googleapis.com/calendar/v3/calendars/${eventId}`;
  const headers = {
    "Authorization": "Bearer "+token
  }
  axios.get(api, headers)
  .then( (response) => {
      console.log(response);
  })
  .catch( (error) =>  {
  })
  .finally( () => {
  });

}

