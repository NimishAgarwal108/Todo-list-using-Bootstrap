import { useState } from "react";
import { IoAddCircleSharp } from "react-icons/io5";
function AddTodo(props){
const [todoName,setTodoName]=useState("");
const [todoDate,setTodoDate]=useState("");
const handleName=(event)=>{
  setTodoName(event.target.value);


};
const handleDate=(event)=>{
  setTodoDate(event.target.value);
  
};
const handleAddTodo=()=>{

  props.onNewItem(todoName,todoDate);
   setTodoName("");
   setTodoDate("");


};

  
  return(
    <div className="container text-center" style={{marginTop:"60px"}}>
    <div className="row">
    <div className="col-6">
      <input type="text" placeholder="enter task here" value={todoName} onChange={handleName} />
    </div>
    <div className="col-4">
      <input type="date" value={todoDate} onChange={handleDate}/>
    </div>
    <div className="col-2">
      <button type="button"
       onClick={handleAddTodo}
              style={{

                backgroundColor: "green",
                color: "white",
                fontSize: "20px",
                padding: "25px 26px",
                border: "none",
                borderRadius: "18px",
                width: "80%",
                cursor: "pointer",
                 position: "relative",
                 top: "-5px",
                 left:"25px",
                 cursor: "pointer",                // pointer on hover
    transition: "all 0.3s ease",      // smooth hover effect
    boxShadow: "0px 4px 6px rgba(0,0,0,0.2)"         
              }}><IoAddCircleSharp /></button>
    </div>
  </div>
  </div>



  );
}
export default AddTodo;