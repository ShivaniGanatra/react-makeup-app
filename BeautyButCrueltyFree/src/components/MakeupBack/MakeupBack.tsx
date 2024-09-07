import './MakeupBack.scss'

import React from "react";

interface MakeupCardBackProps {
  id: number;
  description:string;
  variant:string
}

const MakeupCardBack: React.FC<MakeupCardBackProps> = ({ id, description, variant }) => {
  return (
    <div className={`makeupBack makeupBack__${variant}`}>
      <p>ID: {id}</p>
      <p>{description}</p>
    </div>
  );
};

export default MakeupCardBack;