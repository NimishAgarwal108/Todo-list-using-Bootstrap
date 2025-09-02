import { MdDelete } from "react-icons/md";
function TodoItem(props){
  return(
     <div className="container text-center">
  <div className="row">
    <div className="col-6">
       <span onClick={() =>props.onDone(props.todoName)}
       style={{ cursor: "pointer" }}>
      {props.done?<s>{props.todoName}</s>:props.todoName}
    </span>
    </div>
    <div className="col-4">
      {props.todoDate}
    </div>
    <div className="col-2">
      <button type="button"
      onClick={()=>props.onDelete(props.todoName)}
              style={{
                backgroundColor: "#d4220eff",   // nice red
    color: "white",                
    fontSize: "30px",              
    padding: "10px 26px", 
    width:"40%",         
    border: "none",                
    borderRadius: "22px",          
    cursor: "pointer",             
    transition: "all 0.3s ease",   
    boxShadow: "0px 4px 6px rgba(0,0,0,0.2)" 
              }}><MdDelete /></button>

    
    </div>
  </div>
</div>
  );
}
export default TodoItem;