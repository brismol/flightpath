import React from 'react';
import { connect } from 'react-redux';

const FlightCard = ({ flight, click, rotation, inSchedule, planeId }) => {
  const lastFlight = rotation[rotation.length - 1];

  let classes = 'card';
  let clickable = click;

  if (inSchedule) {
    classes += ' blue';
  } else {
    if (!planeId) {
      classes = 'unclickable';
      clickable = () => {};
    } else if (lastFlight) {
      if (
        lastFlight.destination != flight.origin ||
        flight.departuretime < lastFlight.arrivaltime + 1200
      ) {
        classes = 'unclickable';
        clickable = () => {};
      }
    }
  }

  return (
    <div className={classes} onClick={() => clickable(flight)}>
      <h4 className="textCenter">Flight: {flight.id}</h4>
      <div>
        <div className="buttons">
          <span>{flight.origin}</span>
          <img src="/line.png" width="50px"></img>
          <span>{flight.destination}</span>
        </div>
        <div className="buttons">
          <span>
            {new Date(flight.departuretime * 1000).toISOString().substr(11, 5)}
          </span>

          <span>
            {new Date(flight.arrivaltime * 1000).toISOString().substr(11, 5)}
          </span>
        </div>
      </div>
    </div>
  );
};

const mapState = ({ rotation }) => {
  return {
    rotation: rotation || [],
  };
};

export default connect(mapState)(FlightCard);
