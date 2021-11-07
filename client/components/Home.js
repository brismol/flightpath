import React from 'react';
import { connect } from 'react-redux';
import Flights from './schedulingComponents/Flights';
import Planes from './schedulingComponents/Planes';
import Schedule from './schedulingComponents/Schedule';
import TimeVisual from './schedulingComponents/TimeVisual';

/**
 * COMPONENT
 */
export const Home = (props) => {
  return (
    <div className="container" id="mainGrid">
      <h4 className="center">Aircraft</h4>
      <h4 className="center span-2">Rotation</h4>
      <h4 className="center">Flights</h4>
      <Planes />
      <Schedule />
      <Flights />
      <TimeVisual />
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
