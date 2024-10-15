import React, { useEffect, useState } from 'react';
import { useCalendarApp, ScheduleXCalendar } from '@schedule-x/react';
import {
  createViewDay,
  createViewMonthAgenda,
  createViewMonthGrid,
  createViewWeek,
} from '@schedule-x/calendar';
import { createEventsServicePlugin } from '@schedule-x/events-service';

import '@schedule-x/theme-default/dist/index.css';

function CalendarApp() {
  const [events, setEvents] = useState([]);
  
  const plugins = [createEventsServicePlugin()];

  const calendar = useCalendarApp({
    views: [createViewDay(), createViewWeek(), createViewMonthGrid(), createViewMonthAgenda()],
    events, // Usamos el estado dinámico de eventos
  }, plugins);

  useEffect(() => {
    // Aquí puedes llamar a un servicio externo o backend para obtener los eventos
    const fetchEvents = async () => {
      try {
        const allEvents = await calendar.eventsService.getAll();
        setEvents(allEvents); // Actualizamos el estado con los eventos obtenidos
      } catch (error) {
        console.error('Error fetching events:', error);
      }
    };

    fetchEvents();
  }, [calendar]);

  return (
    <div>
      <ScheduleXCalendar calendarApp={calendar} />
    </div>
  );
}

export default CalendarApp;