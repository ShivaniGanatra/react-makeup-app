import './MakeupFront.scss'

import React from "react";

interface MakeupCardFrontProps {
  name: string;
  image_link: string;
}

const MakeupCardFront: React.FC<MakeupCardFrontProps> = ({ name, image_link }) => {
  return (
    <div className="makeupFront">
      <img className="makeupFront__image" src={image_link} alt={name} />
      <h2>{name}</h2>
    </div>
  );
};

export default MakeupCardFront;