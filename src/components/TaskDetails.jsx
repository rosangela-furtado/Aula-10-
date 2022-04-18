import React from "react";
import Button from "./button";

const TaskDetails = () => {
    return ( 
        <>
            <div className="back-button-container">
                <button> Voltar </button>
            </div>
            <div className="task-details-container">
                <p></p>
                <p>
                    Exemplo de texto, para verificar como fica a situação.
                </p>
            </div>
        </>
     );
}
 
export default TaskDetails;