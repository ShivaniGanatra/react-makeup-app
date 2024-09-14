import Product from "../../types & interfaces/Product";

const filteredProductByType = (productData: Product[], productType: string) => {



    if (productType === "lips") {
        const filteredProductByTypeData = productData.filter(
            (item) =>
                item.product_type.includes("lip_liner") ||
                item.product_type.includes("lipstick")
        );
        return filteredProductByTypeData;
    }

    if (productType === "eyes") {
        const filteredProductByTypeData = productData.filter(
            (item) =>
                item.product_type.includes("eyeliner") ||
                item.product_type.includes("eyeshadow") ||
                item.product_type.includes("mascara")
        );
        return filteredProductByTypeData;
    }

    if (productType === "face") {
        const filteredProductByTypeData = productData.filter(
            (item) =>
                item.product_type.includes("foundation") ||
                item.product_type.includes("blush") ||
                item.product_type.includes("bronzer")
        );
        return filteredProductByTypeData;
    }

    if (productType === "cruelty free") {
        const filteredProductByTypeData = productData.filter(
            (item) =>
                item.tag_list.includes("cruelty free")
        );
        return filteredProductByTypeData;
    }
    else if (productType === "Vegan") {
        const filteredProductByTypeData = productData.filter(
            (item) =>
                !item.tag_list.includes("cruelty free")
        );
        return filteredProductByTypeData;
    }

    const filteredProductByTypeData = productData.filter((item) =>
        item.product_type.includes(productType)
    );
    return filteredProductByTypeData;
};

export default filteredProductByType;
