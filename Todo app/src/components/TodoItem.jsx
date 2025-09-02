function TodoItem(props){
  return(
     <div className="container text-center">
  <div className="row">
    <div className="col-6">
       {props.todoName}
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
    fontSize: "18px",              
    padding: "10px 16px",          
    border: "none",                
    borderRadius: "12px",          
    cursor: "pointer",             
    transition: "all 0.3s ease",   
    boxShadow: "0px 4px 6px rgba(0,0,0,0.2)" 
              }}>Delete</button>
    </div>
  </div>
</div>
  );
}
export default TodoItem;