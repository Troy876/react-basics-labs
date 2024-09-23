import React from 'react';

const Task = (props) => {

    return (
        <div className="card">
            <p>{props.title}</p>
            <p>Due: {props.deadline}</p>
            <p className='description'>Description: {props.description}</p>
        </div>
    )
}

export default Task;
