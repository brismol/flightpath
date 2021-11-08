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
}) => {
  const [loading, setLoading] = useState(false);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const loadFlights = async () => {
      setLoading(true);
      console.log(filter);
      await getFlights(offset, rotation, filter);
      setLoading(false);
    };

    loadFlights();
  }, [offset, filter]);

  return (
    <div className="border flightsContainer">
      {loading ? (
        <div>loading...</div>
      ) : (
        <div>
          <div>
            {flights.map((flight) => (
              <FlightCard click={addFlight} flight={flight} key={flight.id} />
            ))}
          </div>
          <div className="buttons">
            <button
              className="pointer"
              onClick={() => setOffset(offset - 25)}
              disabled={offset < 25}
            >
              Previous
            </button>
            <button className="pointer" onClick={() => setOffset(offset + 25)}>
              Next
            </button>
          </div>
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
    getFlights: (offset) => dispatch(getFlights(offset)),
    addFlight: (flight) => dispatch(addFlight(flight)),
  };
};

export default connect(mapState, mapDispatch)(Flights);
