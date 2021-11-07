import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { getPlanes } from '../../store/planes';
import { Link } from 'react-router-dom';

export const Planes = ({ planes, getPlanes }) => {
  const [loading, setLoading] = useState(false);

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
              <div className="card">{plane.ident}</div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

const mapState = ({ planes }) => {
  return {
    planes: planes || [],
  };
};

const mapDispatch = (dispatch) => {
  return {
    getPlanes: () => dispatch(getPlanes()),
  };
};

export default connect(mapState, mapDispatch)(Planes);
