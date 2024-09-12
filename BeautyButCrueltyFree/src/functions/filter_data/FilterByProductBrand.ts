import Product from "../../types & interfaces/Product";

export const filteredByProductBrand =(productData: Product[],productBrand: string) => {
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
        .filter((item) => item.brand && item.brand.includes(productBrand));

    return filteredProductByTypeData;
};



