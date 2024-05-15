import React from "react";
import { useLocalStorage } from "./useLocalStorage";

const TodoContext = React.createContext();

function TodoProvider({children}) {

    const { item: todos, saveItem: saveTodos, error, loading} = useLocalStorage('TODOS_V1', [])
    const [searchValue, setSearchValue] = React.useState("");

    const [openModal, setOpenModal] = React.useState(false);

    const completedTodos = todos.filter( todo => !!todo.completed).length;
    const totalTodos = todos.length;

    const searchedTodos = todos.filter( todo => todo.text.toLowerCase().includes(searchValue.toLowerCase())  )

    const completeTodos = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex((todo) => todo.text === text);

    newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
    saveTodos(newTodos);
    }

    console.log('LOG 1');
    React.useEffect(() => { console.log('LOooooG 2') }, [totalTodos])
    console.log('LOG 3')

    const deleteTodos = (text) => {
        const newTodos = [...todos];
        const todoIndex = newTodos.findIndex((todo) => todo.text === text);

        newTodos.splice(todoIndex, 1);
        saveTodos(newTodos);
    };

    const addTodo = (text) => {
        const newTodos = [...todos];
        newTodos.push({
            text,
            completed: false,
        });
        saveTodos(newTodos);
    }


    return (
        <TodoContext.Provider
        value={{
                loading,
                error,
                addTodo,
                completedTodos,
                totalTodos,
                completeTodos,
                searchValue,
                searchedTodos,
                setSearchValue,
                deleteTodos,
                openModal,
                setOpenModal
            }}
        >
        {children}
        </TodoContext.Provider>
    );
}


export { TodoContext, TodoProvider };