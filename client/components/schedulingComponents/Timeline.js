import React from 'react';
import { connect } from 'react-redux';

export const TimeVisual = ({ rotation, planeId }) => {
  //build divs and calculate widths for timeline
  const buildVisualizerDivs = (rotation) => {
    let divs = [];
    let end = 0;
    const day = 86400;

    for (let i = 0; i < rotation.length; i++) {
      const flight = rotation[i];
      const idleDiv = {
        color: 'gray',
        width: Math.round(((flight.departuretime - end) / day) * 100),
      };
      const serviceDiv = {
        color: 'green',
        width: Math.round(
          ((flight.arrivaltime - flight.departuretime) / day) * 100
        ),
      };
      const turnaroundDiv = {
        color: 'purple',
        width: Math.round((1200 / day) * 100),
      };

      end = flight.arrivaltime + 1200;

      divs = [...divs, idleDiv, serviceDiv, turnaroundDiv];
    }

    const finalDiv = {
      color: 'grey',
      width: Math.round(((day - end) / day) * 100),
    };

    return [...divs, finalDiv];
  };

  //create style objects
  const divStyle = (width, color) => {
    return {
      width: `${width}%`,
      height: '2rem',
      backgroundColor: color,
    };
  };

  let divs = planeId ? buildVisualizerDivs(rotation) : buildVisualizerDivs([]);

  return (
    <div id="timeVisualize">
      <div className="flex">
        {divs.map((div, idx) => {
          const style = divStyle(div.width, div.color);
          return <div key={idx} style={style}></div>;
        })}
      </div>
      <hr></hr>
      <div className="buttons">
        <span>00:00</span>
        <span>06:00</span>
        <span>12:00</span>
        <span>18:00</span>
        <span>00:00</span>
      </div>
    </div>
  );
};

const mapState = ({ rotation }) => {
  return {
    rotation: rotation || [],
  };
};

export default connect(mapState)(TimeVisual);
