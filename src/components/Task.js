const Task = ( { task, onDelete, onToggle }) => {
    return (
        <div className={`task ${task.reminder ? 'reminder' : ''}`} onDoubleClick={() => onToggle(task.id)}>
            <h3>{task.text}</h3>
            <p>{task.day}</p>
            <button style={{color:'red', padding: 5, margin:5,  cursor:'pointer'}} onClick={() => onDelete(task.id)}>Delete</button>
        </div>
    )
}

export default Task