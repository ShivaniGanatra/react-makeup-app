import Product from "../../types & interfaces/Product";

 export const filteredByProductFavourites =(productData: Product[],idOfFave: string) => {

    const filteredProductById = productData
        .map((item) => ({
            id: item.id,
            image_link: item.image_link,
            name: item.name,
            description: item.description,
            brand: item.brand,
            product_type: item.product_type,
            product_colors: item.product_colors,
        }))
        .filter((item) => item.id == +idOfFave);
    return filteredProductById;
};