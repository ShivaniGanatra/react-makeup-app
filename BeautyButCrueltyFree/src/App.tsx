import "./App.scss";

import Nav from "./containers/Nav/Nav";
import Dashboard from "./containers/Dashboard/Dashboard";
import Aside from "./containers/Aside/Aside";
// import { useEffect, useState} from "react";
import { useEffect, useState } from "react";


const App = () => {

  
    const [veganMakeupData, setVeganMakeupData] = useState<object[]>([])

    const [crueltyFreeMakeupData, setcrueltyFreeMakeupData] = useState<object[]>([])
 
    const getVeganMakeupData =  () => {
        fetch("https://makeup-api.herokuapp.com/api/v1/products.json?product_tags=vegan")
            .then(res => res.json())
            .then(  data =>  setVeganMakeupData(data))
            .catch(err => console.log(err))
    }

    const getCrueltyFreeMakeupData = () => {
        fetch("https://makeup-api.herokuapp.com/api/v1/products.json?product_tags=cruelty+free")
            .then(res => res.json())
            .then( data => setcrueltyFreeMakeupData(data))
            .catch(err => console.log(err))
    }

    useEffect(() => {
        getVeganMakeupData()
        getCrueltyFreeMakeupData()
    }, [])

    console.log(crueltyFreeMakeupData)

    interface Product {
        id:number;
        image_link:string;
        name:string;
        description:string;
        brand:string
    }

    const cleanedProductsData = (anyData:any[]):Product[] => {
        return anyData.map((item) => ({
            id: item.id,
            image_link:item.image_link,
            name:item.name,
            description:item.description,
            brand:item.brand
        }))
    }

    const cleanedVeganData = cleanedProductsData(veganMakeupData)
    console.log(cleanedVeganData)

    const cleanedCrueltyFreeData = cleanedProductsData(crueltyFreeMakeupData)
    console.log(cleanedCrueltyFreeData)



    // make function that loops through two state variables and updates them to create two new objects that only have specific properties that i wanna use
    //store new new obejct in state

    return (
        <div>
        <p></p>
            <button></button>
            <p></p>
            <Nav />
            <main className="main">
                <Aside />
                {cleanedCrueltyFreeData && cleanedVeganData ?<Dashboard veganMakeupData={cleanedVeganData} crueltyFreeMakeupData={cleanedCrueltyFreeData}/> :<p>loading...</p>}
            </main>
        </div>
    );
};

export default App;
