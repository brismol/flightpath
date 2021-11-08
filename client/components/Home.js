import React, { useState } from 'react';
import { connect } from 'react-redux';
import Flights from './schedulingComponents/Flights';
import Planes from './schedulingComponents/Planes';
import Schedule from './schedulingComponents/Schedule';
import Timeline from './schedulingComponents/Timeline';

/**
 * COMPONENT
 */
export const Home = (props) => {
  const [filter, setFilter] = useState(true);

  return (
    <div className="container" id="mainGrid">
      <h4 className="center">Aircraft</h4>
      <h4 className="center span-2">Rotation</h4>
      <div className="center">
        <h4 className="center">Flights</h4>
        <p>
          filter unselectable
          <input
            type="checkbox"
            checked={filter}
            onChange={() => setFilter(!filter)}
          />
        </p>
      </div>
      <Planes />
      <Schedule />
      <Flights filter={filter} />
      <Timeline />
    </div>
  );
};

/**
 * CONTAINER
 */
const mapState = (state) => {
  return {
    username: state.auth.username,
  };
};

export default connect(mapState)(Home);
