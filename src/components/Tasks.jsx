import React from "react";
import Tasks from "./Task";

const Tasks = ({ Tasks, handleTaskClick, handleTaskDeletion }) => {
    return (
        <>
            { Tasks.map((task) =>(
                <task task={task} 
                handleTaskClick={handleTaskClick} 
                handleTaskDeletion={handleTaskDeletion}/>
            ))}; 
        </>
    );
};

export default Tasks;