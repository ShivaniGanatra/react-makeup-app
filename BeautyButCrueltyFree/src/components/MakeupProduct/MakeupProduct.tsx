

import React from "react";
import MakeupCardFront from "./../MakeupFront/MakeupFront";
import MakeupCardBack from "./../MakeupBack/MakeupBack";


interface MakeupCardProps {
  id: number;
  name: string;
  image_link: string;
}

const MakeupCard: React.FC<MakeupCardProps> = ({ id, name, image_link }) => {
  return (
    <div className="makeup-card">

      <MakeupCardFront name={name} image_link={image_link} />
      

      <MakeupCardBack id={id} />
    </div>
  );
};

export default MakeupCard;