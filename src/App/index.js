import { TodoProvider } from '../TodoContext';
import { AppUI } from './AppUI';
import React from 'react';

  const defaultTodos = [
    { text: "React Course", completed: false },
    { text: "How Linux Works", completed: false },
    { text: "Fluent Python Textbook", completed: false },
    { text: "JavaScript the Definitive Guide Textbook", completed: false },
    { text: "Software Architecture Homework", completed: false },
    { text: "Microservices Course Class", completed: false },
    { text: "Review modular arithmetic for Cryptography", completed: false },
  ];


function App() {

  return (
    <TodoProvider>
      <AppUI />
    </TodoProvider>
  );
}


export default App;

