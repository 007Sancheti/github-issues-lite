import React from 'react';

const IssueLabels = ({ labels }) => (
  <div className="issue__labels">
    {labels.map(label =>
      <span
        key={label.id}
        className="issue__label"
        style={{
          boxShadow: `0 0 2px #${label.color}`,
          borderColor: `#${label.color}`
        }}>
        {label.name}
      </span>
    )}
  </div>
);

export default IssueLabels;
