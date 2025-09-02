import TodoItem from "./TodoItem";
function todoItems(props){
  return(
  <>
  {props.todoItems.map((item)=>(
    <TodoItem   key={item.name} todoName={item.name} todoDate={item.dueDate} onDelete={props.onDelete} onDone={props.onDone} done={item.done}></TodoItem>
  )
  
)}
  </> 
  );
}

export default todoItems;