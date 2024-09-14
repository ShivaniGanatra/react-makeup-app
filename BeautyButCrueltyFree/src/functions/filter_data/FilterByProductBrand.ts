import Product from "../../types & interfaces/Product";

export const filteredByProductBrand =(productData: Product[],productBrand: string) => {
    const filteredProductByTypeData = productData.filter((item) => item.brand && item.brand.includes(productBrand));

    return filteredProductByTypeData;
};

export const justBrands = (productData: Product[]) => {
    const noRepeatedBrands: string[] = [];
    const onlyBrandsArray = productData.map((product) => product.brand);
    onlyBrandsArray.forEach((brand) => {
        if (!noRepeatedBrands.includes(brand) && brand) {
            noRepeatedBrands.push(brand);
        }
    });
    return noRepeatedBrands;
};



