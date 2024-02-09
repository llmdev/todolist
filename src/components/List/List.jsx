import React from 'react'


function List({ title, list, handleItemClick, handleItemDelete }) {
    const isCompleted = title === 'Completed'
    return (
        <>
            <h3>{title}</h3>
            <ul id={isCompleted ? 'completed-tasks' : 'incomplete-tasks'}>
                {list.map(item => (
                    <li key={item}>
                        <label onClick={() => handleItemClick(item.id)}>{item.name}</label>
                        <input type="text" />
                        <button className="delete" onClick={() => handleItemDelete(item.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </>
    )
}

export const Lista = React.memo(List)