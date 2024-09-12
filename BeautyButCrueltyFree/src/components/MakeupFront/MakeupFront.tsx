import ShadeSection from "../ShadeSection/ShadeSection";
import "./MakeupFront.scss";

import React, { useEffect, useState } from "react";

interface MakeupCardFrontProps {
    name: string;
    image_link: string;
    useFallback?: boolean;
    brand: string;
    variant: string;
    product_type: string;
    product_colors: {
        hex_value: string;
        colour_name: string;
    }[];
}

enum ImageLoadingState {
    Init,
    Loading,
    Complete,
    Error,
}

const MakeupCardFront: React.FC<MakeupCardFrontProps> = ({
    name,
    image_link,
    brand,
    variant,
    product_type,
    product_colors,
}) => {
    const [imageLoadingState, setImageLoadingState] =
        useState<ImageLoadingState>(ImageLoadingState.Init);
    useEffect(() => {
        console.log("image:", image_link);
        setImageLoadingState(
            image_link ? ImageLoadingState.Loading : ImageLoadingState.Error
        );
    }, [image_link]);

    //console.log(imageLoadingState)
    if (!image_link) {
        return null;
    }

    // TO DO - refactor utility functions to be insides of their own file and imported where and when needed

    const randomMakeupImagesInCaseOfError: string[] = [
        "https://d1f34ajap1v5tm.cloudfront.net/image/Types-of-Makeup-Every-Makeup-Lover-Should-Know.jpg",
        "https://images.squarespace-cdn.com/content/v1/62a98ab3228a337fdf58fe76/9d8b605a-7fba-4633-b285-f5b1e904c4b9/Must+Have+Makeup+Products+For+Your+Makeup+Bag.jpg",
        "https://cdn.britannica.com/35/222035-131-9FC95B31/makeup-cosmetics.jpg",
        "https://www.verywellhealth.com/thmb/T_OlMhFfEYWW0Igl4A_VvDKZ4gY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/gluten-free-makeup-brands-562443-primary-recirc-b8cf5ac52391436ba4114a6355aac323.jpg",
    ];

    const getRandomImageFromArray = (images: string[]): string => {
        let randomNumberBetween0andLastIndex: number = Math.floor(
            Math.random() * images.length
        );
        const image: string = images[randomNumberBetween0andLastIndex];
        //console.log(image + " index is " + randomNumberBetween0andLastIndex);
        return image as string;
    };
    console.log(
        "imageloadingstate:",
        imageLoadingState,
        "ImageLoadingState.Error: ",
        ImageLoadingState.Error
    );
    if (imageLoadingState === ImageLoadingState.Error) {
        return (
            <div className={`makeupFront makeupFront__${variant}`}>
                <div className="makeupFront__image-center">
                    <img
                        className="makeupFront__image"
                        src={getRandomImageFromArray(
                            randomMakeupImagesInCaseOfError
                        )}
                        alt={product_type}
                    />
                </div>
                <h2 className="makeupFront__name">{name}</h2>
                <p className="makeupFront__brand">{brand}</p>
                {product_colors.length > 1 ? (
                    <ShadeSection product_colors={product_colors} />
                ) : (
                    ""
                )}
            </div>
        );
    }

    return (
        <div className={`makeupFront makeupFront__${variant}`}>
            <div className="makeupFront__image-center">
                <img
                    className="makeupFront__image"
                    src={image_link}
                    alt={product_type}
                    onLoad={() =>
                        setImageLoadingState(ImageLoadingState.Complete)
                    }
                    onError={() => {
                        setImageLoadingState(ImageLoadingState.Error);
                    }}
                />
            </div>

            <h2 className="makeupFront__name">{name}</h2>
            <p className="makeupFront__brand">{brand}</p>
            {product_colors.length > 1 ? (
                <ShadeSection product_colors={product_colors} />
            ) : (
                ""
            )}
        </div>
    );
};

export default MakeupCardFront;
