import React from 'react';

function Back(props) {
  const card = props;
  return (
    <div className="back">
      <div className="card">
        <h3 className="text-primary">{card.iconName}</h3>
        <span className={`bi ${card.iconClass} icon`} />
      </div>
    </div>

  );
}

export default Back;
