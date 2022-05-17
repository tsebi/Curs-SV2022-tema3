import { useState } from "react";

const ClickOnName = () => {
    const [open, setOpen] = useState (true);
    
    const toggleShow = () => {
        setOpen(!open);
    }
    return (
         <div className="name-tag" onClick={() => { toggleShow(); } } style={{color: "yellow"}} >
            Toader Sebastian
            {!open && <div className="tag">Numele de mai sus si-a schimbat culoarea</div>}
        </div>
    );
};

export default ClickOnName;