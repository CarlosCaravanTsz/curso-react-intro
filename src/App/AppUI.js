import { TodoCounter } from "../TodoCounter";
import { TodoSearch } from "../TodoSearch";
import { TodoList } from "../TodoList";
import { TodoItem } from "../TodoItem";
import { CreateTodoButton } from "../CreateTodoButton";
import { TodosLoading } from "../TodosLoading"
import { TodosError } from "../TodosError";
import { EmptyTodos } from "../EmptyTodos";
import './AppUI.css'
import { TodoContext } from "../TodoContext";
import { Modal } from "../Modal";
import {TodoForm} from '../TodoForm'
import React from "react";

function AppUI() {

  const { loading, error, searchedTodos, completeTodos, deleteTodos, openModal } = React.useContext(TodoContext)
  return (
    <>
      {searchedTodos.length === 0 ? null : <TodoCounter />  }
      <TodoSearch />

          <TodoList>
            {loading && <TodosLoading />}
            {loading && <TodosLoading />}
            {loading && <TodosLoading />}
            {loading && <TodosLoading />}
            {error && <TodosError />}
            {!loading && searchedTodos.length === 0 && <EmptyTodos />}

            {searchedTodos.map((todo) => (
              <TodoItem
                key={todo.text}
                text={todo.text}
                completed={todo.completed}
                onComplete={() => completeTodos(todo.text)}
                onDelete={() => deleteTodos(todo.text)}
              />
            ))}
          </TodoList>


      <CreateTodoButton />

      {openModal && (
        <Modal>
          <TodoForm />
      </Modal>
      )}

    </>
  );
}

export { AppUI };
