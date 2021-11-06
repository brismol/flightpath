import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { getPlanes } from '../store/planes';
import { getFlights } from '../store/flights';

const Scheduler = ({ planes, getPlanes, flights, getFlights }) => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    //set up a loading here. await promise.all getting planes and flights then display. maybe even a whirling loading icon to be fancy
    //not sure where to move these calls ultimately. I want the plane id in the route. *************
    const getem = async () => {
      setLoading(true);
      await getPlanes();
      await getFlights();
      setLoading(false);
    };

    getem();
  }, []);

  return (
    <div>
      {loading ? (
        <div>load!!!</div>
      ) : (
        <div>
          <div>{planes[0] ? planes[0].ident : <div></div>}</div>
          <div>
            {flights.map((flight) => (
              <div key={flight.id}>{flight.id}</div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

const mapState = ({ planes, flights }) => {
  return {
    planes: planes || [],
    flights: flights || [],
  };
};

const mapDispatch = (dispatch) => {
  return {
    getPlanes: () => dispatch(getPlanes()),
    getFlights: () => dispatch(getFlights()),
  };
};

export default connect(mapState, mapDispatch)(Scheduler);
