import Button from "./Buttons";

const Header = ({ onAdd }) => {

    return (
        <header className='header'>
            <h1>Task Tracker</h1>
            <Button color='green' text='Add Task' onClick={onAdd}/>
        </header>
    )
}

export default Header