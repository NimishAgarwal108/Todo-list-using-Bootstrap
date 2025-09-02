import TodoItem from "./TodoItem";
function todoItems(props){
  return(
  <>
  {props.todoItems.map((item)=>(
    <TodoItem   key={item.name} todoName={item.name} todoDate={item.dueDate} onDelete={props.onDelete}></TodoItem>
  )
  
)}
  </> 
  )
}

export default todoItems;