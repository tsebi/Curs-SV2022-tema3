import IceCream from "./icecream.js"

const Exercise2 =()=> {
    return (
        <div className="exercise">
            Exercise 1.2 - 3 instances of the same icecream, with 2 descriptions
            <div className="icecreams">
                <IceCream globeColor="red" descriptionText="Inghetata mare" priceText="20 RON" />
                <IceCream globeColor="blue" descriptionText="Inghetata medie" priceText="15 RON"/>
                <IceCream globeColor="green" descriptionText="Inghetata mica" priceText="10 RON"/>
            </div>
        </div>
    )
};

export default Exercise2;