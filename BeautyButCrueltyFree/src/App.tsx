import "./App.scss";
import Nav from "./containers/Nav/Nav";
import Dashboard from "./containers/Dashboard/Dashboard";
import Aside from "./containers/Aside/Aside";
import Brands from "./containers/Brands/Brands";
import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import filteredProductByType from "./functions/filter_data/FilterByProductType";
import cleanedProductsData from "./functions/clean_data/clean_data";
import { filteredByProductBrand } from "./functions/filter_data/FilterByProductBrand";
import Product from "./types & interfaces/Product";

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

    const cleanedVeganData = cleanedProductsData(veganMakeupData);
    const cleanedCrueltyFreeData = cleanedProductsData(crueltyFreeMakeupData);

    const cleanedSearchVeganData = cleanedProductsData(veganMakeupData);
    const cleanedCrueltySearchFreeData = cleanedProductsData(
        crueltyFreeMakeupData
    );

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

    console.log(cleanedCrueltySearchFreeData);
    console.log(cleanedSearchVeganData);

    console.log(filteredByProductBrand(cleanedCrueltySearchFreeData, "deciem"));
    console.log(filteredByProductBrand(cleanedSearchVeganData, "colourpop"));

    const justBrands = (productData: Product[]) => {
        const onlyBrandsArray = productData.map((product) => product.brand);
        return onlyBrandsArray
    };

    useEffect(() => {
        getVeganMakeupData();
        getCrueltyFreeMakeupData();
    }, []);

    const veganBrands = justBrands(cleanedSearchVeganData);
    console.log(veganBrands);
    const crueltyFreeBrands = justBrands(cleanedCrueltySearchFreeData);
    console.log(crueltyFreeBrands);

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
                                        cleanedCrueltySearchFreeData,
                                        searchProductType
                                    )}
                                    veganSearchMakeupData={filteredByProductBrand(
                                        cleanedSearchVeganData,
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
