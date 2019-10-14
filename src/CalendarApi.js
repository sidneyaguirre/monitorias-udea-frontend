import axios from "axios";

var storeToken = "";

export const initProfile = async token => {
  localStorage.setItem("token", JSON.stringify(token));
  const api = "https://www.googleapis.com/plus/v1/people/me";
  fetch(api, {
    method: "GET",
    headers: {
      Authorization: "Bearer " + token
    }
  })
    .then(res => res.json())
    .catch(error => console.error("Error:", error))
    .then(response => {
      localStorage.setItem("user", JSON.stringify(response));
      document.location.href = "/student/step1";
    });
};

export const getCalendarList = async token => {
  const api = "https://www.googleapis.com/calendar/v3/users/me/calendarList";
  const headers = {
    Authorization: "Bearer " + token
  };
  axios
    .get(api, headers)
    .then(response => {
      console.log(response);
    })
    .catch(error => {})
    .finally(() => {});

  fetch(api, {
    method: "GET",
    headers: {
      Authorization: "Bearer " + token
    }
  })
    .then(res => res.json())
    .catch(error => console.error("Error:", error))
    .then(response => console.log("Success:", response));
};

export const subscribeToCalendar = async calendarId => {
  const token = JSON.parse(localStorage.getItem("token"));
  const api = `https://www.googleapis.com/calendar/v3/users/me/calendarList/`;
  const bod = { id: calendarId, selected: true };
  if (!!token) {
    return fetch(api, {
      method: "POST",
      headers: {
        Authorization: "Bearer " + token,
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(bod)
    });
  } else {
    document.location.href = "/";
  }
};

export const subscribeToEvent = async event => {
  const token = JSON.parse(localStorage.getItem("token"));
  const api = `https://www.googleapis.com/calendar/v3/calendars/primary/events`;
  const bod = { end: {"dateTime": event.end}, iCalUID: event.id, start: {"dateTime": event.start} };
  if (!!token) {
    return fetch(api, {
      method: "POST",
      headers: {
        Authorization: "Bearer " + token,
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(bod)
    });
  } else {
    document.location.href = "/";
  }
};
