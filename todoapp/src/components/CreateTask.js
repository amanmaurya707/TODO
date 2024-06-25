// src/components/HomePage.js
import React from 'react';
import { useState } from 'react';
import Sidebar from './Sidebar';
import { useNavigate } from 'react-router-dom';
const CreateTask = () => {

  //
let [date,setDate]=useState(null);
let [text,setText]=useState([]);
let [taskField,setTaskField]=useState({date:null,details:"",status:"pending",email:""});

let [msg,setMsg]=useState("");


function changeDate(e)
{
  setDate(e.target.value);

}



//
const AddTask = async (e) => {
e.preventDefault();
let bodyData={
date:date,
details:text,
email:localStorage.getItem("email"),
status:"pending"
}
  //alert("save and edit");
  
  try {
      const response = await fetch('http://localhost:8081/task/add', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
              'Access-Control-Allow-Origin':'*'
          },
          body: JSON.stringify(bodyData)
          
      });
      if (response.ok) {
        alert("added"+JSON.stringify(bodyData));
        setMsg("Task Added Successfully !!!!");
      } else {
         
      }
  } catch (error) {
      console.error('Error:', error);
  }
}
//for view task
const navigate = useNavigate();


function ViewTask()
{
  navigate('/viewtask');

}





//
  return (<div>
<Sidebar></Sidebar>
<div class="container">
    <div class="row">
      <div class="col-md-6 offset-md-3">
        <h2 class="text-center text-dark mt-5">Add Task</h2>
        <h3 class="text-center text-success mt-5">{msg}</h3>
        <div class="text-center mb-5 text-dark"></div>
        <div class="card my-5">

          <form class="card-body cardbody-color p-lg-5">

            <div class="text-center">
              <img src="https://cdn.pixabay.com/photo/2016/03/31/19/56/avatar-1295397__340.png" class="img-fluid profile-image-pic img-thumbnail rounded-circle my-3"
                width="200px" alt="profile"/>
            </div>

            <div class="mb-3">
                
        <span class="col-6" align="right"><input type="date" name="date" id="date" onChange={e=>changeDate(e)}/>
         </span>     
            </div>
            <p class="card-text"><textarea rows="4" cols="60" onChange={e=>setText(e.target.value)}></textarea></p>
            
            <div class="text-center"><button type="submit" class="btn btn-warning px-5 mb-5 w-100" onClick={(e)=>AddTask(e)}>Add task</button></div>
            <div class="text-center"><button type="submit" class="btn btn-info px-5 mb-5 w-100" onClick={ViewTask}>View Task</button></div>
          </form>
        </div>

      </div>
    </div>
  </div>


  </div>);

};

export default CreateTask;
