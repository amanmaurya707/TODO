

import userEvent from "@testing-library/user-event";
import { useEffect, useState } from "react";
import SelectDate from "./SelectDate";
import DatePicker from "./DatePicker";
import Sidebar from "./Sidebar";
//import { useLocation } from "react-router-dom";


const Task = () => {
//for location
let [dateData,setDateData]=useState(null);

//const location = useLocation();
//const inputValue = location.state ? location.state.date : '';
function changeDate(e)
{
  setDateData(e.target.value);
 // navigate('/task', { state: {date } });

}

let [text,setText]=useState([]);
let [count,setCount]=useState(1);
let countalltask=[];
//useEffect(()=>{setText((pre)=>{pre=""})},[text]);
//for save task
let email=localStorage.getItem("email");
let date=date;
let taskBody={email:"",status:"pending",date:"",details:""};
  const handleSaveTask = async (e) => {
    e.preventDefault();
    try {
        const response = await fetch('http://localhost:8081/task/add', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin':'*'
            },
            //body: JSON.stringify(formValue)
        });
        if (response.ok) {
            //setMsg("User registered successfully");
            console.log('User registered successfully');
           // navigate("/user",{ state: { user: response.data } });
        } else {
            //setMsg("Failed to register user");
            console.log('Failed to register user');
        }
    } catch (error) {
        console.error('Error:', error);
    }
  }



function AddMoreTask()
{
  setCount(count+1);
  setText(pre=>pre);
  
}
function DeleteTask(id)
  {
    console.log("id"+id);
    const newItems = countalltask.filter((task) => task.id !== id);
    //setItems(newItems);
   // countalltask=
   //alert("called here"+new);
   //console.log(newItems);
  
  }

  for(let i=0;i<count;i++)
  {
    countalltask.push(<li key={i} class="list-unstyled mt-5"> <div class="card">
    
    <div class="card-body">
     
      <div class="card-title d-inline-block">
      <div>
      
      <span class="col-6" align="right"><input type="date" name="date" id="date" onChange={e=>changeDate(e)}/>

   
     </span>
</div>

      </div>
      
      <p class="card-text"><textarea rows="4" cols="60" onChange={e=>setText(e.target.value)}></textarea></p>
     
    </div>
    <button class="btn btn-lg  btn-warning mt-0" type="submit" onClick>Save Task</button>
    
  </div></li>);
  }


  

return(
  
  <div class="container-fluid mx-200">
  <Sidebar></Sidebar>
  <div class="col-6 mx-auto" align="center">
  <div>
<ul>
 {countalltask}
</ul>
</div>
<div align="right">
<button onClick={()=>AddMoreTask()}>add more task (+)</button>

</div>

  </div>

   </div>
  );


}
export default Task; 