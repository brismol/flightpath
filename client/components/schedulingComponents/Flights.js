import React, { useState, useEffect } from 'react';
import { getFlights } from '../../store/flights';
import { connect } from 'react-redux';

export const Flights = ({ flights, getFlights }) => {
  const [loading, setLoading] = useState(false);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const nextPage = async () => {
      setLoading(true);
      await getFlights(offset);
      setLoading(false);
    };

    nextPage();
  }, [offset]);

  return (
    <div className="border">
      {loading ? (
        <div>loading...</div>
      ) : (
        <div>
          <div>
            {flights.map((flight) => (
              <div key={flight.id}>{flight.id}</div>
            ))}
          </div>
          <button onClick={() => setOffset(offset - 25)} disabled={offset < 25}>
            Previous
          </button>
          <button onClick={() => setOffset(offset + 25)}>Next</button>
        </div>
      )}
    </div>
  );
};

const mapState = ({ flights }) => {
  return {
    flights: flights || [],
  };
};

const mapDispatch = (dispatch) => {
  return {
    getFlights: (offset) => dispatch(getFlights(offset)),
  };
};

export default connect(mapState, mapDispatch)(Flights);
