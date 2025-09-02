import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
import { useState } from "react";
import WelcomeMessage from "./components/WelcomeMessage";
import styles from "./components/App.module.css";


function App() {
  const initialTodoItems=[
    {
      name:"Meeting",
      dueDate:"06/09/2025",
      done:false,
    },
    {
      name:"Movie",
      dueDate:"08/09/2025",
      done:false,
    },
  ]

  const [todoItems,setTodoItem]=useState(initialTodoItems);
  const handleTodoItems=(itemName,itemDueDate)=>{
    const newTodoItem=[...todoItems,{name:itemName,dueDate:itemDueDate,done:false}];
    setTodoItem(newTodoItem);
  };

  const handleDelete=(todoItemName)=>{
    const newTodoItem=todoItems.filter((item)=>item.name!==todoItemName);
    setTodoItem(newTodoItem);


  }

  const handleMarkDone = (todoName) => {
  const updatedTodos = todoItems.map((item) =>
    item.name === todoName ? { ...item, done:!item.done } : item
  );
  setTodoItem(updatedTodos);
};

 

  return   (  
     <div className={styles['todo-container']}>
      <AppName/>
      <AddTodo onNewItem={handleTodoItems}/>
      {todoItems.length===0 && <WelcomeMessage></WelcomeMessage>}
      <TodoItems onDone={handleMarkDone} onDelete={handleDelete} todoItems={todoItems} ></TodoItems>
      </div>
 );
  
}

export default App;