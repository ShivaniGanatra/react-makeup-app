import "./App.scss";
import Nav from "./containers/Nav/Nav";
import Dashboard from "./containers/Dashboard/Dashboard";
import Aside from "./containers/Aside/Aside";
import Brands from "./containers/Brands/Brands";
import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import filteredProductByType from "./functions/filter_data/FilterByProductType";
import {
    cleanedProductsData,
    cleanedVeganDataremovedCrueltyfFree,
} from "./functions/clean_data/clean_data";
import {
    filteredByProductBrand,
    justBrands,
} from "./functions/filter_data/FilterByProductBrand";
import Favorites from "./containers/Favourites/Favorites";

import { filteredByProductFavourites } from "./functions/filter_data/FilterByFavourites";

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

    //filtered data

    const cleanedCrueltyFreeData = cleanedProductsData(crueltyFreeMakeupData);
    const cleanedCrueltySearchFreeData = cleanedCrueltyFreeData;
    const cleanedFavouriteCrueltyFreeData = cleanedCrueltyFreeData;

    const onlyCleanedVeganData = cleanedProductsData(veganMakeupData);

    const cleanedVeganData =
        cleanedVeganDataremovedCrueltyfFree(onlyCleanedVeganData);
    const cleanedSearchVeganData =
        cleanedVeganDataremovedCrueltyfFree(onlyCleanedVeganData);
    const cleanedFavouriteVeganData =
        cleanedVeganDataremovedCrueltyfFree(onlyCleanedVeganData);

    //brands for demonstractive pruposes
    const veganBrands = justBrands(cleanedSearchVeganData);
    const crueltyFreeBrands = justBrands(cleanedCrueltySearchFreeData);

    const [productType, setProductType] = useState("");

    const getTypeOfProduct = (product: string): void => {
        setProductType(product);
    };

    const [searchProductType, setSearchProductType] = useState("");

    const getTypeOfProductInSearch = (product: string): void => {
        setSearchProductType(product);
    };

    const [stateArray, setStateArray] = useState([""]);

    const addToFavourites = (id: string, heartStatus: boolean): void => {
        if (heartStatus === false) {
            setStateArray([...stateArray, id]);
        } else
            setStateArray([...stateArray].filter((arr) => !arr.includes(id)));
        console.log(stateArray.join(","));
    };

    useEffect(() => {
        getVeganMakeupData();
        getCrueltyFreeMakeupData();
    }, []);

    console.log(cleanedCrueltyFreeData);

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
                                        addToFavourites={addToFavourites}
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
                                addToFavourites={addToFavourites}
                                    veganBrands={veganBrands}
                                    crueltyFreeBrands={crueltyFreeBrands}
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
                <Route
                    path="/test2"
                    element={
                        <div>
                            {cleanedCrueltyFreeData && cleanedVeganData ? (
                                <Favorites
                                    cleanedFavouriteCrueltyFreeData={filteredByProductFavourites(
                                        cleanedFavouriteCrueltyFreeData,
                                        stateArray
                                    )}
                                    addToFavourites={addToFavourites}
                                    cleanedFavouriteVeganData={filteredByProductFavourites(
                                        cleanedFavouriteVeganData,
                                        stateArray
                                    )}
                                />
                            ) : (
                                <p>loading:</p>
                            )}
                        </div>
                    }
                />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
