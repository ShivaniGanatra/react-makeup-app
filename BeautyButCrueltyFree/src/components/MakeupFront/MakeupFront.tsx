import './MakeupFront.scss'

import React, { useEffect, useState } from "react";

interface MakeupCardFrontProps {
  name: string;
  image_link: string;
  useFallback?:boolean
  brand:string
  variant:string
  product_type:string
}

enum ImageLoadingState {
  Init,
  Loading,
  Complete,
  Error
}

const MakeupCardFront: React.FC<MakeupCardFrontProps> = ({ name, image_link, useFallback, brand,variant, product_type }) => {
  const [imageLoadingState, setImageLoadingState] = useState<ImageLoadingState>(ImageLoadingState.Init)
  useEffect (() => {
  setImageLoadingState(image_link?ImageLoadingState.Loading:ImageLoadingState.Error)
  }, [image_link])

  //console.log(imageLoadingState)
  if(!image_link){
    return null
  }

  //some of the images arent working so i want to have randomdefault images
  //this is the resource that showed me what to do if an image isnt working
  // https://www.youtube.com/watch?v=4nYsbm8N4EQ&t=934s
  // if get time use name if name is foundation get random foundtion image lipstick image etc

  const randomMakeupImagesInCaseOfError:string[] = [
    "https://d1f34ajap1v5tm.cloudfront.net/image/Types-of-Makeup-Every-Makeup-Lover-Should-Know.jpg",
    "https://images.squarespace-cdn.com/content/v1/62a98ab3228a337fdf58fe76/9d8b605a-7fba-4633-b285-f5b1e904c4b9/Must+Have+Makeup+Products+For+Your+Makeup+Bag.jpg",
    "https://cdn.britannica.com/35/222035-131-9FC95B31/makeup-cosmetics.jpg",
    "https://www.verywellhealth.com/thmb/T_OlMhFfEYWW0Igl4A_VvDKZ4gY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/gluten-free-makeup-brands-562443-primary-recirc-b8cf5ac52391436ba4114a6355aac323.jpg"
  ]

  const getRandomImageFromArray = (images:string[]):string => {
    let randomNumberBetween0andLastIndex: number = Math.floor(
      Math.random() * images.length
    );
    const image: string = images[randomNumberBetween0andLastIndex];
    //console.log(image + " index is " + randomNumberBetween0andLastIndex);
    return image as string;
  }

  



  if(imageLoadingState === ImageLoadingState.Error && useFallback){
    return (
      <div className={`makeupFront makeupFront__${variant}`}>
        <img className="makeupFront__image" src={getRandomImageFromArray(randomMakeupImagesInCaseOfError)} alt={product_type} />
        <h2 className='makeupFront__name'>error {name}</h2>
        <p className='makeupFront__brand'>{brand}</p>
        <div>{product_type}</div>
      </div>
    )
  }
  
  return (
    <div className={`makeupFront makeupFront__${variant}`}>
      <img className="makeupFront__image" src={image_link} alt={product_type} 
      onLoad={() => setImageLoadingState(ImageLoadingState.Complete)}
      onError={() => setImageLoadingState(ImageLoadingState.Error)}
      
      />
      <h2 className='makeupFront__name'>{name}</h2>
      <p className='makeupFront__brand'>{brand}</p>
      <div>{product_type}</div>
    </div>
  );
};

export default MakeupCardFront;