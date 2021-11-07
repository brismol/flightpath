import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export const Schedule = () => {
  const params = useParams();
  const [planeId, setPlaneId] = useState(params.planeId);

  useEffect(() => {
    setPlaneId(params.planeId);
  }, [params]);

  return (
    <div className="border span-2 padding">
      {planeId ? (
        <h4>Click on the right to add your first flight!</h4>
      ) : (
        <h4>
          Please select an aircraft from the panel on the left to begin
          scheduling your flights!
        </h4>
      )}
    </div>
  );
};

export default Schedule;
