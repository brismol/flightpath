import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { getPlanes } from '../../store/planes';

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
    <div className="border">
      {loading ? (
        <div>loading...</div>
      ) : (
        <div>
          {planes.map((plane) => (
            <div key={plane.ident}>{plane.ident}</div>
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
