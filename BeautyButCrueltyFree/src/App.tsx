import "./App.scss";
import Nav from "./containers/Nav/Nav";
import Dashboard from "./containers/Dashboard/Dashboard";
import Aside from "./containers/Aside/Aside";
// import { useEffect, useState} from "react";
import { useEffect, useState } from "react";

const App:React.FC = () => {
    const [veganMakeupData, setVeganMakeupData] = useState<object[]>([]);

    const [crueltyFreeMakeupData, setcrueltyFreeMakeupData] = useState<object[]>([]);

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

    useEffect(() => {
        getVeganMakeupData();
        getCrueltyFreeMakeupData();
    }, []);

    //console.log(crueltyFreeMakeupData);

    interface Product {
        id: number;
        image_link: string;
        name: string;
        description: string;
        brand: string;
        product_type:string
    }

    const cleanedProductsData = (anyData: any[]): Product[] => {
        return anyData.map((item) => ({
            id: item.id,
            image_link: item.image_link,
            name: item.name,
            description: item.description,
            brand: item.brand,
            product_type:item.product_type
        }));
    };

    const cleanedVeganData = cleanedProductsData(veganMakeupData);
    //console.log(cleanedVeganData);

    const cleanedCrueltyFreeData = cleanedProductsData(crueltyFreeMakeupData);
    //console.log(cleanedCrueltyFreeData);



    //filter data here use this video how to pass info from child to parent component
    //https://www.youtube.com/watch?v=vOMdzCw2bMA

    // make function that loops through two state variables and updates them to create two new objects that only have specific properties that i wanna use
    //store new new obejct in state

    //https://www.google.com/search?q=how+to+pass+down+a+function+as+a+prop+react+ts&sca_esv=074f8b059443cf28&sca_upv=1&rlz=1C5MACD_enGB1034GB1034&ei=EqncZu3KIoDzi-gPxZikqQc&ved=0ahUKEwjtm96WyLGIAxWA-QIHHUUMKXUQ4dUDCA8&uact=5&oq=how+to+pass+down+a+function+as+a+prop+react+ts&gs_lp=Egxnd3Mtd2l6LXNlcnAiLmhvdyB0byBwYXNzIGRvd24gYSBmdW5jdGlvbiBhcyBhIHByb3AgcmVhY3QgdHMyCBAhGKABGMMEMggQIRigARjDBEj9KlC7GVi4J3ADeAGQAQCYAbwCoAHCDKoBBzIuNC4yLjG4AQPIAQD4AQGYAgmgAuMHwgIKEAAYsAMY1gQYR8ICChAhGKABGMMEGAqYAwCIBgGQBgiSBwU0LjQuMaAH9y8&sclient=gws-wiz-serp#fpstate=ive&vld=cid:d93df898,vid:yM64D3nZmfQ,st:303

const [productType,setProductType] = useState("")

const getTypeOfProduct = (product:string):void => {
  setProductType(product) 
}

interface exampleObject {
    name:string
}

const smallObjectsArrayExample : exampleObject[] = [
    {name:"lip gloss"},
    {name:"lip crayon"},
    {name:"lipstick"},
    {name:"nail varnish"},
]



const filteredProduct = (productData:exampleObject[],productType:string) => {
    //there is more than one type of lipstick such as crayon but its in the category of lipstick
    //therefore i will try filter gloss and then lip

    //dont want to change original array so im copying it
    // const copiedData:exampleObject[] = [...productData]

    const result = productData
    .map(person => ({ name: person.name }))
    .filter(person => person.name.includes(productType));

return result 
}
    console.log(smallObjectsArrayExample)
    console.log(filteredProduct(smallObjectsArrayExample,"lip gloss"))
    console.log(filteredProduct(smallObjectsArrayExample,"lip"))
    console.log(filteredProduct(smallObjectsArrayExample,"nail varnish"))





    return (
        <div>
            <div>{`Im the grandparent app but product is ${productType}`}</div>
            <Nav />
            <main className="main">
                <Aside getTypeOfProduct={getTypeOfProduct}/>
                {cleanedCrueltyFreeData && cleanedVeganData ? (
                    <Dashboard
                        veganMakeupData={cleanedVeganData}
                        crueltyFreeMakeupData={cleanedCrueltyFreeData}
                    />
                ) : (
                    <p>loading...</p>
                )}
            </main>
        </div>
    );
};

export default App;
