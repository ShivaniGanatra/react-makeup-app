import Product from "../../types & interfaces/Product";

export const cleanedProductsData = (anyData: any[]): Product[] => {
    return anyData.map((item) => ({
        id: item.id,
        image_link: item.image_link,
        name: item.name,
        description: item.description,
        brand: item.brand,
        product_type: item.product_type,
        product_colors: item.product_colors,
        tag_list:item.tag_list
    }));
};

export const cleanedVeganDataremovedCrueltyfFree = (anyData: Product[]): Product[] => {
    const noCrueltyFree = anyData.filter((data)=> !data.tag_list.includes("cruelty free"))
    return noCrueltyFree
};



