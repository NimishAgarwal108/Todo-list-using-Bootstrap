import {useRef } from "react";
import { IoAddCircleSharp } from "react-icons/io5";

function AddTodo(props){
 const todoNameElement = useRef();
  const todoDateElement = useRef();


const handleAddTodo=(event)=>{
  const todoName=todoNameElement.current.value;
  const todoDate=todoDateElement.current.value;

    //to prevent empty inputs
if (!todoName || !todoDate) {
    alert("Please enter both task name and date.");
    return;
  }

  props.onNewItem(todoName, todoDate);
  todoNameElement.current.value="";
  todoDateElement.current.value="";
    


};
  
  return(
    <div className="container text-center" style={{marginTop:"60px"}}>
    <div className="row">
    <div className="col-6">
      <input type="text" ref={todoNameElement} placeholder="enter task here"  />
    </div>
    <div className="col-4">
      <input type="date" ref={todoDateElement}/>
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