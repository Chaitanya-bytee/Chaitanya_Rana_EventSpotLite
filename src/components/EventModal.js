import React from 'react';
import './EventModal.css';

const EventModal = ({ event, onClose }) => {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>
          &times;
        </button>
        <img src={event.image} alt={event.title} className="modal-image" />
        <h2>{event.title}</h2>
        <p>{event.description}</p>
        <p><strong>Date:</strong> {event.date}</p>
      </div>
    </div>
  );
};

export default EventModal;
