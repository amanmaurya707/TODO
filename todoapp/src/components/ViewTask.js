import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import Sidebar from "./Sidebar";
//import { useLocation } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

function ViewTask()
{
 //use navigate
 const navigate = useNavigate();
  //task id ,date ,details,status,email
let [taskData,setTaskData]=useState([]);
let [defaultStatus,setdefaultStatus]=useState("pending")
//let defaultStatus="pending";
let updateStatus="completed";
//handle finish
const handleFinish = async (e,id,status) => {
 alert("finish call");
  e.preventDefault();
  try {
      const response = await fetch("http://localhost:8081/task/update/status?id="+id+"&status="+updateStatus ,{
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin':'*',
            "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept",
             "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
          }
         //" http://localhost:8080/task/update/status?id="+id+"&status="+updateStatus,   
         //?myparam1=${abc_energyprogramid}`
      });
      if (response.ok) {
        //alert("Finish Call ....OKKK");
        navigate(0);
      } else {
         
      }
  } catch (error) {
      console.error('Error:', error);
  }
}

//handle delete
let handleDelete =async (e,id)=>
{
  e.preventDefault();

alert("call delete alert");  

  try {
    await axios.delete("http://localhost:8081/task/delete/"+id ,{
      headers:{
       // 'Content-Type': 'application/json',
        'Access-Control-Allow-Origin':'*',
        "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept",
         "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS" 

      }
    
    });
   // navigate("/viewtask"); //not work
   setTaskData(taskData.filter(task => task.id !== id))

    console.log("Post deleted:", id);
    //setData(data.filter((post) => post.id !== id));
    ///task/delete/{id}
  } catch (error) {
    console.error("Error deleting post:", error);
  }


}


useEffect(() => {
  const fetchTask = async () => {
      const email = localStorage.getItem('email'); // Retrieve the username from local storage
      //alert(username);
      
      try {
        
          const response = await axios.get("http://localhost:8081/task/"+email,{
            //${username}
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin':'*',
                "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept",
                 "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS" 
            }
           
          }); 
         
          setTaskData(response.data); 
          //alert(response.data);
          console.log(response.data);
      } catch (err) {
          console.log("unable to fetch data");
      }
      //
      
      
  };
  fetchTask();
}, []);

//navigate page after click


const handleButtonClick = () => {
  navigate('/addtask');
};

return (

<div class="">
<Sidebar></Sidebar>
<div class="d-flex justify-content-end" align="right" >

<div class="col-8 mt-3 mr-0">

<table class="table table-bordered" >
    <thead>
      <tr>
        
        <th>Task Id</th>
        <th>Date</th>
        <th>Details</th>
        <th>Email</th>
        <th>Status</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
    {taskData.map((task) => (
          <tr key={task.id}>
            <td>{task.id}</td>
            <td>{task.date}</td>
            <td>{task.details}</td>
            <td>{task.email}</td>
            <td>{task.status==defaultStatus?(task.status):(  <button type="button" class="btn btn-success" disabled>Completed</button>)}
            </td>
            <td>{task.status==defaultStatus?(
                <div>
                <button type="button" class="btn btn-warning" onClick={(e) => handleFinish(e,task.id,task.status)}>Finish</button>
                <button type="button" class="btn btn-danger"
                 onClick={(e) => handleDelete(e,task.id)}>Delete</button>
                </div>
              ):(
                <button type="button" class="btn btn-danger" 
                onClick={(e) => handleDelete(e,task.id)}>Delete</button>
              )}
             
              </td>
          </tr>
        ))}


    </tbody>
  </table>
<div class="de">
<button type="button"  class="btn btn-dark" onClick={handleButtonClick}>Add Task</button>
</div>

</div>
</div>
</div>);
}
export default ViewTask;