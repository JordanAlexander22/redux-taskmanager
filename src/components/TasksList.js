import React from 'react';
import Task from './Task';

const TaskList = (props) => {
    return(
        <div>
            <div className= 'card-header text-uppercase text-center font-weight-bold'>
                {props.status}
            </div>
            {props.tasks.map((task) => (
                 <Task key= {task.id} task= {task} />
            ))}
        </div>
    )
}


export default TaskList 