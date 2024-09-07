import './MakeupBack.scss'

import React from "react";

interface MakeupCardBackProps {
  id: number;
  description:string;
}

const MakeupCardBack: React.FC<MakeupCardBackProps> = ({ id, description }) => {
  return (
    <div className="makeupBack">
      <p>ID: {id}</p>
      <p>{description}</p>
    </div>
  );
};

export default MakeupCardBack;