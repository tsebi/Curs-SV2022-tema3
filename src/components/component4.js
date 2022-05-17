import ColorsAdd from "./coloradd.js"
import { useState } from "react";
import AddColorForm from "./add_component_form.js";

const Exercise4 =()=> {
    const [colors, setColors] = useState([ { id: 0, squareColor: "#000000" } ]);

    const addColor = (color) => {
        const newColors = [...colors];
        color.id = colors.length;
        newColors.push(color);
        setColors(newColors);
    }

    const removeColor = (id) => {
        const newColors = colors.filter((color) => color.id !== id);
        setColors(newColors);
    }

    return (
        <div className="exercise">
            Exercise 3 
            <br />
                <AddColorForm handleClick={addColor}/>
            <div className="color-container">
            {colors.map((color) => (<ColorsAdd key={color.id} {...color} handleRemove={removeColor}/>))}
            </div>
            <div id="gradient-mix" style={{background: "linear-gradient(`{colorsString}`)"}}></div>
        </div>
    );
};

export default Exercise4;