import './App.css';
import './index';
import Header from './components/Header';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';
import { useState } from "react"
//import Task from './components/Task';

function App() {
  const [showAddTask, setShowAddTask] = useState(true)
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'Food Shopping', 
      day: '12 feb 2021', 
      reminder: false,
    }, 
    {
      id: 2,
      text: 'Meeting at School', 
      day: '14 feb 2021', 
      reminder: true,  
    },
    {
      id: 3,
      text: 'Fittness hour', 
      day: '18 feb 2021', 
      reminder: true,  
    }
])

// Add Task
const addTask = (task) => {
  const id = Math.floor(Math.random() * 10000) + 1
  const newTask = {id, ...task}
  setTasks([...tasks, newTask])
}

// Delete task
const deleteTask = (id) => {
  setTasks(tasks.filter((task) => task.id !== id))
}

// Toggle Reminder 
const toggleReminder = (id) => {
  setTasks(tasks.map((task) => task.id === id ? {...task, reminder: !task.reminder} : task)) // reverse the task reminder from true to false.
}
  return (
    <div className="container">
      <Header  onAdd={() => setShowAddTask(!showAddTask)}/>
      {showAddTask && <AddTask onAdd={addTask} />}
      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/> : "Tascks complited"} 
    </div>
  );
}

export default App;
