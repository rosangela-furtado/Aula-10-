import React from 'react';
import { Cgclos,CgInfo } from "react-icons/cg";
import './Task.css';

const Task = ({ Task, handleTaskClick, handleTaskDeletion }) => {
    return (
        <div className="task-container" 
        style={Task.completed ? {borderLeft: '6px solid #B0C4DE'} : { } }>

            <div className='task-title' onClick={() => handleTaskClick (Task.id) }>
                {Task.title}
            </div>

            <div className="buttons-container">

                <button className="remove-task-button>" 
            
                onClick={() => handleTaskDeletion (Task.id) }>
                <Cgclos/>

                </button>

                <button className="see-task-details-button>">

                <CgInfo/>

                </button>

            </div>

        </div>
    )
  
  
  
    //  return <div className=".task-container">{Task.title}</div>;
};
 
export default Task;