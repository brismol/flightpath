import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import FlightCard from './FlightCard';
import { removeFlight } from '../../store/rotation';

export const Schedule = ({ rotation, removeFlight }) => {
  const params = useParams();
  const [planeId, setPlaneId] = useState(params.planeId);

  useEffect(() => {
    setPlaneId(params.planeId);
  }, [params]);

  return (
    <div className="border span-2 flightsContainer">
      <div></div>
      {planeId ? (
        <div>
          {rotation.length ? (
            rotation.map((flight) => (
              <FlightCard
                flight={flight}
                key={flight.id}
                click={removeFlight}
                inSchedule={true}
              />
            ))
          ) : (
            <h4>Add your first flight from the panel on the right.</h4>
          )}
        </div>
      ) : (
        <h4>
          Please select an aircraft from the panel on the left to begin
          scheduling your flights.
        </h4>
      )}
    </div>
  );
};

const mapState = ({ rotation }) => {
  return {
    rotation: rotation || [],
  };
};

const mapDispatch = (dispatch) => {
  return {
    removeFlight: () => dispatch(removeFlight()),
  };
};

export default connect(mapState, mapDispatch)(Schedule);
