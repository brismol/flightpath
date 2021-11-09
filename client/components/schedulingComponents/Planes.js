import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { getPlanes } from '../../store/planes';
import { Link } from 'react-router-dom';

export const Planes = ({ planes, getPlanes, rotation }) => {
  const [loading, setLoading] = useState(false);

  //calculate usage percent here
  let usage = 0;
  for (let i = 0; i < rotation.length; i++) {
    let flight = rotation[i];
    let travelTime = flight.arrivaltime - flight.departuretime;
    usage += travelTime + 1200;
  }

  const usagePercent = Math.round((usage / 86400) * 100);

  //***

  useEffect(() => {
    const loadPlanes = async () => {
      setLoading(true);
      await getPlanes();
      setLoading(false);
    };

    loadPlanes();
  }, []);

  return (
    <div className="border flightsContainer">
      {loading ? (
        <div>loading...</div>
      ) : (
        <div>
          {planes.map((plane) => (
            <Link to={`/${plane.ident}`} key={plane.ident}>
              <div className="card">
                <h4>Aircraft: {plane.ident}</h4>
                <div>Usage: {usagePercent}%</div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

const mapState = ({ planes, rotation }) => {
  return {
    planes: planes || [],
    rotation: rotation || [],
  };
};

const mapDispatch = (dispatch) => {
  return {
    getPlanes: () => dispatch(getPlanes()),
  };
};

export default connect(mapState, mapDispatch)(Planes);
