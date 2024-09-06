import './MakeupBack.scss'

import React from "react";

interface MakeupCardBackProps {
  id: number;
}

const MakeupCardBack: React.FC<MakeupCardBackProps> = ({ id }) => {
  return (
    <div className="makeupBack">
      <p>ID: {id}</p>
    </div>
  );
};

export default MakeupCardBack;