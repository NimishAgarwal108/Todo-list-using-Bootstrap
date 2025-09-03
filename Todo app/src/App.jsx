import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
import { useState } from "react";
import WelcomeMessage from "./components/WelcomeMessage";
import styles from "./components/App.module.css";

function App() {
  const [todoItems, setTodoItem] = useState(() => {
    const savedTodos = localStorage.getItem("todoItems");
    return savedTodos ? JSON.parse(savedTodos) : [
      { name: "Meeting", date: "06/09/2025", done: false },
      { name: "Movie", date: "08/09/2025", done: false }
    ];
  });

  const updateTodos = (newTodos) => {
    setTodoItem(newTodos);
    localStorage.setItem("todoItems", JSON.stringify(newTodos));
  };

  const handleTodoItems = (itemName, itemDate) => {
    const newTodoItem = [...todoItems, { name: itemName, date: itemDate, done: false }];
    updateTodos(newTodoItem);
  };

  const handleDelete = (todoItemName) => {
    const newTodoItem = todoItems.filter((item) => item.name !== todoItemName);
    updateTodos(newTodoItem);
  };

  const handleMarkDone = (todoName) => {
    const updatedTodos = todoItems.map((item) =>
      item.name === todoName ? { ...item, done: !item.done } : item
    );
    updateTodos(updatedTodos);
  };

  return (
    <div className={styles['todo-container']}>
      <AppName />
      <AddTodo onNewItem={handleTodoItems} />
      {todoItems.length === 0 && <WelcomeMessage />}
      <TodoItems onDone={handleMarkDone} onDelete={handleDelete} todoItems={todoItems} />
    </div>
  );
}

export default App;
