import Shade from "./Shade";

interface Product {
    id: number;
    image_link: string;
    name: string;
    description: string;
    brand: string;
    product_type: string;
    product_colors: Shade[];
    tag_list:string[]
}

export default Product