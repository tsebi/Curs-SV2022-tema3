import { useState } from "react";

const AddColorForm = (props) => {
    const [squareColor, setSquareColor] = useState("#000000");
    
    const handleClick = () => {
        props.handleClick({squareColor})
    };
    
    return (
        <>
            <input type="color" value={squareColor} onChange={(e) => setSquareColor(e.target.value)}></input>
            <button onClick={handleClick}>Add</button>
        </>
    );
};

export default AddColorForm;