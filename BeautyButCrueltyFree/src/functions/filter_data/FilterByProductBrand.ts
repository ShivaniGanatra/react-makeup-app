import Product from "../../types & interfaces/Product";
const filteredByProductBrand = (
    productData: Product[],
    productType: string
) => {
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
        .filter((item) => item.name.includes(productType));

    return filteredProductByTypeData;
};

export default filteredByProductBrand