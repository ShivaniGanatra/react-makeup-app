import "./App.scss";

import Nav from "./containers/Nav/Nav";
import Dashboard from "./containers/Dashboard/Dashboard";
import Aside from "./containers/Aside/Aside";
// import { useEffect, useState} from "react";
import { useEffect, useState } from "react";


const App = () => {

    const [veganMakeupData, setVeganMakeupData] = useState([])

    const [crueltyFreeMakeupData, setcrueltyFreeMakeupData] = useState([])

    const getVeganMakeupData = () => {
        fetch("https://makeup-api.herokuapp.com/api/v1/products.json?product_tags=vegan")
            .then(res => res.json())
            .then(data => setVeganMakeupData(data))
            .catch(err => console.log(err))
    }

    const getCrueltyFreeMakeupData = () => {
        fetch("https://makeup-api.herokuapp.com/api/v1/products.json?product_tags=cruelty+free")
            .then(res => res.json())
            .then(data => setcrueltyFreeMakeupData(data))
            .catch(err => console.log(err))
    }

    useEffect(() => {
        getVeganMakeupData()
        getCrueltyFreeMakeupData()
    }, [])

    return (
        <div>
        <p></p>
            <button></button>
            <p></p>
            <Nav />
            <main className="main">
                <Aside />
                <Dashboard veganMakeupData={veganMakeupData} crueltyFreeMakeupData={crueltyFreeMakeupData}/>
            </main>
        </div>
    );
};

export default App;
