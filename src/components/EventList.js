import React from 'react';
import './EventList.css';

const EventList = ({ events, onEventClick }) => {
  return (
    <div className="row">
      {events.map((event) => (
        <div className="col-md-4 mb-4" key={event.id}>
          <div className="event-card" onClick={() => onEventClick(event)}>
            <img src={event.image} alt={event.title} className="img-fluid" />
            <div className="event-info">
              <h2>{event.title}</h2>
              <p>{event.date}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default EventList;
