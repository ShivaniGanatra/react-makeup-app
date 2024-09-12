import ShadeSection from "../ShadeSection/ShadeSection";
import "./MakeupFront.scss";
import React, { useEffect, useState } from "react";
import { randomMakeupImagesInCaseOfError,getRandomImageFromArray } from "../../functions/error_handling/Error";

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
        setImageLoadingState(
            image_link ? ImageLoadingState.Loading : ImageLoadingState.Error
        );
    }, [image_link]);

    if (!image_link) {
        return null;
    }

    // TO DO - refactor utility functions to be insides of their own file and imported where and when needed

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
