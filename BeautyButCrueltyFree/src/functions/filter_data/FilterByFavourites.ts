import Product from "../../types & interfaces/Product";


export const filteredByProductFavourites =(productData: Product[],idsOfFaves: string[]) => {
    let onlyFavourites : Product[]=[]

    for (let index = 0; index < idsOfFaves.length; index++) {
        const fave = +idsOfFaves[index];
        productData.forEach(product => {
            if(product.id === fave){
                onlyFavourites.push(product)
            }     
        });
    }
    return onlyFavourites
    
};