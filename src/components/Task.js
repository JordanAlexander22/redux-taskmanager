import React from 'react';


const Task = (props) => {
    return(
        <div>
        <h2 className= 'card-title mt-3 text-uppercase px-2' 
        style= {{color: '#3a4'}}>{props.task.title}</h2>
        <p className= 'card-text mb-3 text-muted font-weight-bold px-2'>{props.task.description}</p>
        </div>
    )
}


export default Task 