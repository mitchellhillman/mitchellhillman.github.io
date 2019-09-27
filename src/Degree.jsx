import React from 'react';

const Degree = ({
  school,
  degree,
  start,
  end
}) => (
  <div className="degree">
    <p className="degree__degree">{degree}</p>
    <p className="degree__school">{school}</p>
    <p className="degree__dates">{start} - {end}</p>
  </div>
);
export default Degree;
