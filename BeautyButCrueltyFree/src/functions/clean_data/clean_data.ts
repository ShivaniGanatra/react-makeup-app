import Product from "../../types & interfaces/Product";

const cleanedProductsData = (anyData: any[]): Product[] => {
    return anyData.map((item) => ({
        id: item.id,
        image_link: item.image_link,
        name: item.name,
        description: item.description,
        brand: item.brand,
        product_type: item.product_type,
        product_colors: item.product_colors,
    }));
};

export default cleanedProductsData