import React from 'react';

function Back(props) {
  const { iconName } = props;
  const { iconClass } = props;

  return (
    <div className="back">
      <div className="card">
        <h3 className="text-primary">{iconName}</h3>
        <span className={`bi ${iconClass} icon`} />
      </div>
    </div>

  );
}

export default Back;
