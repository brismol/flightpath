import React from 'react';

export const FlightCard = ({ flight, addFlight }) => {
  return (
    <div className="card" onClick={() => addFlight(flight)}>
      <h4>Flight: {flight.id}</h4>
      <div>
        <p>
          {flight.origin} {'->'} {flight.destination}
        </p>
        <p>
          {new Date(flight.departuretime * 1000).toISOString().substr(11, 5)}{' '}
          {'->'}{' '}
          {new Date(flight.arrivaltime * 1000).toISOString().substr(11, 5)}
        </p>
      </div>
    </div>
  );
};
