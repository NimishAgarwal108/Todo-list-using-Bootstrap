import TodoItem from "./TodoItem";
function TodoItems(props){
  return(
  <>
  {props.todoItems.map((item)=>(
    <TodoItem   key={item.name} todoName={item.name} todoDate={item.date} onDelete={props.onDelete} onDone={props.onDone} done={item.done}></TodoItem>
  )
  
)}
  </> 
  );
}

export default TodoItems;