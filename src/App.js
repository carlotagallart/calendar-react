import React, { useState } from "react";
import "./App.css";
// import componentes de la libreria
import {
  ScheduleComponent,
  Day,
  Week,
  WorkWeek,
  Month,
  Agenda,
  Inject,
} from "@syncfusion/ej2-react-schedule";

function App() {
  // toma los eventos de localstorage y si no hay toma una array vacia
  const [events, setEvents] = useState(
    JSON.parse(localStorage.getItem("event")) || []
  );

  // guarda y añade los eventos en el local storage
  const setLocalStorage = (event) => {
    try {
      const eventos = events.concat([event]);
      setEvents(eventos);
      let jsonData = JSON.stringify(eventos);
      console.log(jsonData);
      window.localStorage.setItem("event", jsonData);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <ScheduleComponent
      // se visualiza el mes como primera vista
      currentView="Month"
      // muestra la data (eventos)
      eventSettings={{ dataSource: events }}
      // añade el evento al guardar
      addEvent={setLocalStorage}
    >
      {
        // inyeccion en el header de mes, dia, semana, dias de trabajo y agenda
        // diferentes maneras de visualizar el calendario
      }
      <Inject services={[Month, Day, Week, WorkWeek, Agenda]}></Inject>
    </ScheduleComponent>
  );
}

export default App;
