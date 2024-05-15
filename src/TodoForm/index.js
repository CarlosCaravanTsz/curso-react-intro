import React from "react";
import './TodoForm.css'
import { TodoContext } from "../TodoContext";

function TodoForm() {

    const { setOpenModal, addTodo } = React.useContext(TodoContext);

    const [newTodoValue, setNewTodoValue] = React.useState('');


    const onSubmit = (e) => {
        e.preventDefault();
        addTodo(newTodoValue)
        setOpenModal(false);

    }

    const onCancel = () => {
        setOpenModal(false)
    }

    const onChange = (e) => {
    setNewTodoValue(e.target.value);
    };

    return (
        <form onSubmit={onSubmit} >
        <label>Escribe tu nuevo TODO</label>
        <textarea value={newTodoValue} onChange={onChange} required placeholder="Learn React..." />
        <div className="TodoForm-buttonContainer">
        <button type= "button" onClick = {onCancel}  className="TodoForm-button  TodoForm-button--cancel">
            Cancelar
        </button>
        <button type="submit" className="TodoForm-button  TodoForm-button--add">
            Aceptar
        </button>
        </div>
    </form>
    );
}

export { TodoForm }

