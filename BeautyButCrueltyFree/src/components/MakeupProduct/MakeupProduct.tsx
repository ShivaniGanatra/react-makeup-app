import React, { useState } from "react";
import MakeupCardFront from "./../MakeupFront/MakeupFront";
import MakeupCardBack from "./../MakeupBack/MakeupBack";
import ReactCardFlip from "react-card-flip";


interface MakeupCardProps {
  id: number;
  name: string;
  image_link: string;
}

const MakeupCard: React.FC<MakeupCardProps> = ({ id, name, image_link }) => {

  //make card flip 
  //resource = "https://www.geeksforgeeks.org/design-a-flip-card-effect-using-reactjs/"
  const [isFlipped, setFlipped] = useState(false)
  const handleClick = () => {
    setFlipped(!isFlipped)
  };

// created a card flip component using this resource and importing a package see resource
//  https://blog.openreplay.com/creating-animated-flip-cards-in-react/

  return (
    <ReactCardFlip
    isFlipped={isFlipped}
    flipDirection="vertical"
    flipSpeedBackToFront={3}
    flipSpeedFrontToBack={3}
    
    >
      
      <div  className="front"  >
      <MakeupCardFront name={name} image_link={image_link} useFallback ={true}/>
      <button onClick={handleClick} >button</button>
      </div>

      <div  className="back">
      <MakeupCardBack id={id} />
      <button onClick={handleClick}>button</button>
      </div>

    </ReactCardFlip>
  );
};

export default MakeupCard;