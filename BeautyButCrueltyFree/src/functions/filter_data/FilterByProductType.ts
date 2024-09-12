import Product from "../../types & interfaces/Product";


const filteredProductByType = (
    productData: Product[],
    productType: string
) => {
    if (productType === "lips") {
        const filteredProductByTypeData = productData
            .map((item) => ({
                id: item.id,
                image_link: item.image_link,
                name: item.name,
                description: item.description,
                brand: item.brand,
                product_type: item.product_type,
                product_colors: item.product_colors,
            }))
            .filter(
                (item) =>
                    item.product_type.includes("lip_liner") ||
                    item.product_type.includes("lipstick")
            );
        return filteredProductByTypeData;
    }

    if (productType === "eyes") {
        const filteredProductByTypeData = productData
            .map((item) => ({
                id: item.id,
                image_link: item.image_link,
                name: item.name,
                description: item.description,
                brand: item.brand,
                product_type: item.product_type,
                product_colors: item.product_colors,
            }))
            .filter(
                (item) =>
                    item.product_type.includes("eyeliner") ||
                    item.product_type.includes("eyeshadow") ||
                    item.product_type.includes("mascara")
            );
        return filteredProductByTypeData;
    }

    if (productType === "face") {
        const filteredProductByTypeData = productData
            .map((item) => ({
                id: item.id,
                image_link: item.image_link,
                name: item.name,
                description: item.description,
                brand: item.brand,
                product_type: item.product_type,
                product_colors: item.product_colors,
            }))
            .filter(
                (item) =>
                    item.product_type.includes("foundation") ||
                    item.product_type.includes("blush") ||
                    item.product_type.includes("bronzer")
            );
        return filteredProductByTypeData;
    }

    const filteredProductByTypeData = productData
        .map((item) => ({
            id: item.id,
            image_link: item.image_link,
            name: item.name,
            description: item.description,
            brand: item.brand,
            product_type: item.product_type,
            product_colors: item.product_colors,
        }))
        .filter((item) => item.product_type.includes(productType));

    return filteredProductByTypeData;
};

export default filteredProductByType