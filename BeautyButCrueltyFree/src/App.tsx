import "./App.scss";
import Nav from "./containers/Nav/Nav";
import Dashboard from "./containers/Dashboard/Dashboard";
import Aside from "./containers/Aside/Aside";
import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App: React.FC = () => {
    const [veganMakeupData, setVeganMakeupData] = useState<object[]>([]);

    const [crueltyFreeMakeupData, setcrueltyFreeMakeupData] = useState<
        object[]
    >([]);

    const getVeganMakeupData = () => {
        fetch(
            "https://makeup-api.herokuapp.com/api/v1/products.json?product_tags=vegan"
        )
            .then((res) => res.json())
            .then((data) => setVeganMakeupData(data))
            .catch((err) => console.log(err));
    };

    const getCrueltyFreeMakeupData = () => {
        fetch(
            "https://makeup-api.herokuapp.com/api/v1/products.json?product_tags=cruelty+free"
        )
            .then((res) => res.json())
            .then((data) => setcrueltyFreeMakeupData(data))
            .catch((err) => console.log(err));
    };

    //console.log(crueltyFreeMakeupData);

    interface Shade {
        hex_value: string;
        colour_name: string;
    }

    interface Product {
        id: number;
        image_link: string;
        name: string;
        description: string;
        brand: string;
        product_type: string;
        product_colors: Shade[];
    }

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

    const cleanedVeganData = cleanedProductsData(veganMakeupData);
    //console.log(cleanedVeganData);

    const cleanedCrueltyFreeData = cleanedProductsData(crueltyFreeMakeupData);
    console.log("data:", cleanedCrueltyFreeData);

    console.log(cleanedCrueltyFreeData.length);

    // console.log(crueltyFreeShades);
    // console.log(crueltyFreeShades[0]);

    useEffect(() => {
        getVeganMakeupData();
        getCrueltyFreeMakeupData();
    }, []);

    const [productType, setProductType] = useState("dont show initially");

    const getTypeOfProduct = (product: string): void => {
        setProductType(product);
    };

    const [searchProductType, setSearchProductType] = useState(
        "dont show initially"
    );

    const getTypeOfProductInSearch = (product: string): void => {
        setSearchProductType(product);
    };

    if (productType.includes(",")) {
        const products = productType.split(",");
        console.log(products);
    }

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

    return (
        <BrowserRouter>
            <Nav getTypeOfSearchProduct={getTypeOfProductInSearch} />

            <Routes>
                <Route
                    path="/"
                    element={
                        <main className="main">
                            <Aside getTypeOfProduct={getTypeOfProduct} />
                            {cleanedCrueltyFreeData && cleanedVeganData ? (
                                <div>
                                    <Dashboard
                                        veganMakeupData={filteredProductByType(
                                            cleanedVeganData,
                                            productType
                                        )}
                                        veganSearchMakeupData={filteredProductByType(
                                            cleanedVeganData,
                                            searchProductType
                                        )}
                                        crueltyFreeMakeupData={filteredProductByType(
                                            cleanedCrueltyFreeData,
                                            productType
                                        )}
                                        crueltyFreeSearchMakeupData={filteredProductByType(
                                            cleanedCrueltyFreeData,
                                            searchProductType
                                        )}
                                    />
                                </div>
                            ) : (
                                <p>loading...</p>
                            )}
                        </main>
                    }
                />
                <Route path="/test" element={<div>test</div>} />
                <Route path="/test2" element={<div>test2</div>} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
