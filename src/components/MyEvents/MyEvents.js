import React, { useState, useEffect } from "react";
import axios from "axios";
import "./MyEvents.css";

const MyEvents = () => {
  const [registeredEvents, setRegisteredEvents] = useState([]);
  const [eventCount, setEventCount] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchRegisteredEvents = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          setError("Please log in to view your events.");
          setLoading(false);
          return;
        }

        const response = await axios.get("http://localhost:5000/api/users/registered-events", {
          headers: { Authorization: token },
        });

        setRegisteredEvents(response.data.registeredEvents);
        setEventCount(response.data.eventCount);
        setLoading(false);
      } catch (err) {
        setError(err.response?.data?.message || "Failed to load registered events.");
        setLoading(false);
        console.error("Error fetching registered events:", err);
      }
    };

    fetchRegisteredEvents();
  }, []);

  return (
    <div className="my-events-container">
      <h1 className="my-events-title">✅ My Events</h1>
      {loading && <p className="my-events-loading">Loading your events...</p>}
      {error && <p className="my-events-error">{error}</p>}
      {!loading && !error && (
        <div className="my-events-content">
          <p className="my-events-count">Total Registered Events: {eventCount}</p>
          {registeredEvents.length > 0 ? (
            <div className="my-events-list">
              {registeredEvents.map((event, index) => (
                <div key={index} className="my-events-card">
                  <h3 className="my-events-card-title">{event.eventName}</h3>
                  <p className="my-events-card-date">
                    <strong>Date:</strong> {new Date(event.eventDate).toLocaleDateString()}
                  </p>
                  <p className="my-events-card-status">
                    <strong>Status:</strong> {event.isPaid}
                  </p>
                  {event.eventPic && (
                    <img
                      src={`http://localhost:5000/uploads/${event.eventPic}`}
                      alt={event.eventName}
                      className="my-events-card-image"
                    />
                  )}
                </div>
              ))}
            </div>
          ) : (
            <p className="my-events-empty">No events registered yet.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default MyEvents;