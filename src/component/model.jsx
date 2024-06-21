import React, {useState} from "react";
import Model from "./mode-test";
import "./model.css";

export default function PopUp(){

    const [showModelPop, setShowModelPop] = useState(false);

    function handleClick(){
        setShowModelPop(!showModelPop);
    };

    function onClose(){
        setShowModelPop(false);
    };

    return (
        <div className="pop-up">
            <button onClick={handleClick}>Open Model Popup</button>
            {
                showModelPop && (
                    <Model 
                        onClose={onClose} 
                        header={<h1>Customized Header</h1>}
                        body={<div>Customize Body</div>}
                        footer={<h1>Customized Footer</h1>}
                    />
                )
            }
        </div>
    );
};