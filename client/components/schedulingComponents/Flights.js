import React, { useState, useEffect } from 'react';
import { getFlights } from '../../store/flights';
import { connect } from 'react-redux';
import FlightCard from './FlightCard';
import { addFlight } from '../../store/rotation';

export const Flights = ({
  flights,
  getFlights,
  rotation,
  addFlight,
  filter,
  planeId,
}) => {
  const [loading, setLoading] = useState(false);
  const [offset, setOffset] = useState(0);

  const loadFlights = async () => {
    setLoading(true);
    await getFlights(offset, rotation, filter, planeId);
    setLoading(false);
  };

  useEffect(() => {
    loadFlights();
  }, [filter, rotation, offset, planeId]);

  return (
    <div className="border flightsContainer">
      {loading ? (
        <div>loading...</div>
      ) : (
        <div>
          <div>
            {flights.length > 0 ? (
              <div>
                {flights.map((flight) => (
                  <FlightCard
                    click={addFlight}
                    flight={flight}
                    key={flight.id}
                    planeId={planeId}
                  />
                ))}
              </div>
            ) : (
              <div>
                There are no remaining flights that can be added to this
                rotation
              </div>
            )}
          </div>
          {/* only show buttons when filter is false, at least one flight in rotation, and a plane is selected */}
          {(!filter || rotation.length === 0 || !planeId) && (
            <div className="buttons">
              <button
                className="pointer"
                onClick={() => setOffset(offset - 25)}
                disabled={offset < 25}
              >
                Previous
              </button>
              <button
                className="pointer"
                onClick={() => setOffset(offset + 25)}
                disabled={offset > 1323}
              >
                Next
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

const mapState = ({ flights, rotation }) => {
  return {
    flights: flights || [],
    rotation: rotation || [],
  };
};

const mapDispatch = (dispatch) => {
  return {
    getFlights: (offset, rotation, filter, planeId) =>
      dispatch(getFlights(offset, rotation, filter, planeId)),
    addFlight: (flight) => dispatch(addFlight(flight)),
  };
};

export default connect(mapState, mapDispatch)(Flights);
