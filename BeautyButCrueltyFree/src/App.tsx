import "./App.scss";
import Nav from "./containers/Nav/Nav";
import Dashboard from "./containers/Dashboard/Dashboard";
import Aside from "./containers/Aside/Aside";
import Brands from "./containers/Brands/Brands";
import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Product from "./types & interfaces/Product";
import filteredProductByType from "./functions/filter_data/FilterByProductType";
import filteredByProductBrand from "./functions/filter_data/FilterByProductBrand";

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


    const cleanedCrueltyFreeData = cleanedProductsData(crueltyFreeMakeupData);

    useEffect(() => {
        getVeganMakeupData();
        getCrueltyFreeMakeupData();
    }, []);

    const [productType, setProductType] = useState("");

    const getTypeOfProduct = (product: string): void => {
        setProductType(product);
    };

    const [searchProductType, setSearchProductType] = useState("");

    const getTypeOfProductInSearch = (product: string): void => {
        setSearchProductType(product);
    };

    if (productType.includes(",")) {
        const products = productType.split(",");
        console.log(products);
    }

    return (
        <BrowserRouter>
            <Nav getTypeOfProductInSearch={getTypeOfProductInSearch} />

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
                                        crueltyFreeMakeupData={filteredProductByType(
                                            cleanedCrueltyFreeData,
                                            productType
                                        )}
                                    />
                                </div>
                            ) : (
                                <p>loading...</p>
                            )}
                        </main>
                    }
                />
                <Route
                    path="/test"
                    element={
                        <div>
                            {cleanedCrueltyFreeData && cleanedVeganData ? (
                                <Brands
                                    crueltyFreeSearchMakeupData={filteredByProductBrand(
                                        cleanedCrueltyFreeData,
                                        searchProductType
                                    )}
                                    veganSearchMakeupData={filteredByProductBrand(
                                    cleanedVeganData,
                                        searchProductType
                                    )}
                                />
                            ) : (
                                <p>loading:</p>
                            )}
                        </div>
                    }
                />
                <Route path="/test2" element={<div>test2</div>} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
