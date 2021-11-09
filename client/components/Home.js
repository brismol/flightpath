import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import Flights from './schedulingComponents/Flights';
import Planes from './schedulingComponents/Planes';
import Schedule from './schedulingComponents/Schedule';
import Timeline from './schedulingComponents/Timeline';
import { useParams } from 'react-router-dom';

/**
 * COMPONENT
 */
export const Home = ({ history }) => {
  const [filter, setFilter] = useState(false);
  //   defaulting filter to false because load times are very slow at the moment
  if (
    history.location.pathname === '/login' ||
    history.location.pathname === '/signup'
  )
    history.push('/home');

  const params = useParams();
  const [planeId, setPlaneId] = useState(params.planeId);

  useEffect(() => {
    setPlaneId(params.planeId);
  }, [params]);

  return (
    <div className="container" id="mainGrid">
      {/* labels for the 3 main panels        */}
      <h4 className="center">Aircraft</h4>
      <h4 className="center span-2">
        {planeId ? `${planeId} Rotation` : 'Rotation'}
      </h4>
      <div className="buttons">
        <p>
          Flights
          <strong>Flights</strong>
        </p>
        <p>
          filter unselectable
          <input
            type="checkbox"
            checked={filter}
            onChange={() => setFilter(!filter)}
          />
        </p>
      </div>
      {/* ************ */}

      {/* main panels */}
      <Planes />
      <Schedule planeId={planeId} />
      <Flights filter={filter} planeId={planeId} />
      {/* ***** */}

      <Timeline planeId={planeId} />
    </div>
  );
};

/**
 * CONTAINER
 */
const mapState = (state, { history }) => {
  return {
    username: state.auth.username,
    history,
  };
};

export default connect(mapState)(Home);
