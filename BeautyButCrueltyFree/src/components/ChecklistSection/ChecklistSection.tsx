import "./ChecklistSection.scss";
import { useState } from "react";

interface ChecklistSectionProps {
    variant: string;
    getTypeOfProduct(product: string): void;
}

const ChecklistSection: React.FC<ChecklistSectionProps> = ({
    getTypeOfProduct,
}) => {
    const [showFace, setFaceSettings] = useState<boolean>(false);
    const [showEyes, setEyeSettings] = useState<boolean>(false);
    const [showLips, setLipSettings] = useState<boolean>(false);
    const [showNails, setNailSettings] = useState<boolean>(false);

    const toggleFaceSettings = () => {
        setFaceSettings(!showFace);
    };

    const toggleEyeSettings = () => {
        setEyeSettings(!showEyes);
    };

    const toggleLipSettings = () => {
        setLipSettings(!showLips);
    };

    const toggleNailSettings = () => {
        setNailSettings(!showNails);
    };

    return (
        <section className="checklist">
            <section className="checklist__section">
                <h2
                    onClick={toggleFaceSettings}
                    className="checklist__section-title"
                >
                    face ⌄
                </h2>
                {showFace && (
                    <div>
                        <button
                            onClick={() => getTypeOfProduct("face")}
                            className="checklist__product-type"
                        >
                            All face products
                        </button>
                        <button
                            onClick={() => getTypeOfProduct("foundation")}
                            className="checklist__product-type"
                        >
                            Foundation
                        </button>
                        <button
                            onClick={() => getTypeOfProduct("blush")}
                            className="checklist__product-type"
                        >
                            Blush
                        </button>
                        <button
                            onClick={() => getTypeOfProduct("bronzer")}
                            className="checklist__product-type"
                        >
                            Bronzer
                        </button>
                    </div>
                )}
            </section>
            <section className="checklist__section">
                <h2
                    onClick={toggleEyeSettings}
                    className="checklist__section-title"
                >
                    eyes ⌄
                </h2>
                {showEyes && (
                    <div>
                        <button
                            onClick={() => getTypeOfProduct("eyes")}
                            className="checklist__product-type"
                        >
                            All eye products
                        </button>
                        <button
                            onClick={() => getTypeOfProduct("eyeliner")}
                            className="checklist__product-type"
                        >
                            Eyeliner
                        </button>
                        <button
                            onClick={() => getTypeOfProduct("eyeshadow")}
                            className="checklist__product-type"
                        >
                            Eyeshadow
                        </button>
                        <button
                            onClick={() => getTypeOfProduct("mascara")}
                            className="checklist__product-type"
                        >
                            Mascara
                        </button>
                    </div>
                )}
            </section>
            <section className="checklist__section">
                <h2
                    onClick={toggleLipSettings}
                    className="checklist__section-title"
                >
                    lips ⌄
                </h2>
                {showLips && (
                    <div>
                        <button
                            onClick={() => getTypeOfProduct("lips")}
                            className="checklist__product-type"
                        >
                            All lip products
                        </button>
                        <button
                            onClick={() => getTypeOfProduct("lip_liner")}
                            className="checklist__product-type"
                        >
                            Lip-liner
                        </button>
                        <button
                            onClick={() => getTypeOfProduct("lipstick")}
                            className="checklist__product-type"
                        >
                            Lipstick need to specify category too
                        </button>
                    </div>
                )}
            </section>
            <section className="checklist__section">
                <h2
                    onClick={toggleNailSettings}
                    className="checklist__section-title"
                >
                    nails ⌄
                </h2>
                {showNails && (
                    <button
                        onClick={() => getTypeOfProduct("nail_polish")}
                        className="checklist__product-type"
                    >
                        Nail Varnish
                    </button>
                )}
            </section>
        </section>
    );
};

export default ChecklistSection;
