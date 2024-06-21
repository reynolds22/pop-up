import React from "react";

export default function Model({id, header, body, footer, onClose}){
    return (
        <div id={id || "Model"} className="model">
            <div className="content">
                <div className="header">
                    <span onClick={onClose} className="close-model-icon">&times;</span>
                    <h2>{header ? header : "Header"}</h2>
                </div>
                <div className="body">
                    {body ? body : <div><p>This is the Model Body</p></div>}
                </div>
                <div className="footer">
                    {footer ? footer : <h2>Footer</h2>}
                </div>
            </div>
        </div>
    );
};