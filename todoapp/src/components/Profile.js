import React, { useState } from "react";
import "../profile.css"
import Sidebar from "./Sidebar";
import { useEffect } from "react";
import axios from "axios";
function Profile()
{

let [isEditing,setIsEditing]=useState(false); 
//boolean var for tracking edit/save icon
let [name,setName]=useState("John Doe");
let [email,setEmail]=useState("John@gmail.com");
let [phoneno,setPhoneNo]=useState("2244774321");
let [password,setPassword]=useState("12345678");
//fetching profile details using axios
const [profile, setProfile] = useState({email:"",name:"",contact:"",password:""});
const  [error,setError]=useState(null);

const onChangeHandle =(e)=>
  {
    //console.log(e.target)
  const {name,value}=e.target;
  //console.log(name);
  //console.log(...formValue);
  setProfile("");
  setProfile({...profile,[name]:value});
   //handleValidation();
  
  }


    useEffect(() => {
        const fetchProfile = async () => {
            const username = localStorage.getItem('email'); // Retrieve the username from local storage
            //alert(username);
            
            try {
              
                const response = await axios.get("http://localhost:8080/user/"+username,{
                  //${username}
                  headers: {
                      'Content-Type': 'application/json',
                      'Access-Control-Allow-Origin':'*',
                      "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept",
                       "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS" 
                  }
                  //responseType: "json"
                }); 
                //const response = await axios.get('http://localhost:8080/user/${username}'); ///user/{email}
                setProfile(response.data); 
                //alert(response.data);
                console.log(response.data);
            } catch (err) {
                setError('Error fetching profile data');
            }
            //
            
            
        };
        fetchProfile();
      }, []);


///
function onClick(e)
{
  //alert("alert");
  e.preventDefault();
  setIsEditing(!isEditing);
  //handleSaveAndEdit(e);

  if(isEditing==true)
    {
      //alert(profile,toString);
      //alert(isEditing) ;
      handleSaveAndEdit(e);
    }
 
}

///
// axios library backend communication
const handleSaveAndEdit = async (e) => {
  alert("save and edit");
  e.preventDefault();
  try {
      const response = await fetch('http://localhost:8080/user/update', {
          method: 'PUT',
          headers: {
              'Content-Type': 'application/json',
              'Access-Control-Allow-Origin':'*'
          },
          body: JSON.stringify(profile)
          
      });
      if (response.ok) {
        alert("updated"+JSON.stringify(profile));
      } else {
         
      }
  } catch (error) {
      console.error('Error:', error);
  }
}


///
  return (
    <>
<Sidebar></Sidebar>
<section class="vh-100" style={{backgroundColor:"#f4f5f7"}} margin="center">
  <div class="container py-5 h-100" >
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col col-lg-6 mb-4 mb-lg-0">
        <div class="card mb-3" style={{borderRadius: ".5rem"}}>
          <div class="row g-0">
            <div class="col-md-4 gradient-custom text-center text-white"
              style={{borderTopLeftRadius:".5rem", borderBottomLeftRadius: ".5rem"}}>
              <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp"
                alt="Avatar" class="img-fluid my-5" style={{width: "80px"}} />
              <h5>Hello</h5>
              <p><span>{profile.name}</span></p>
             
            </div>
            <div class="col-md-8">
              <div class="card-body p-4">
                <form onSubmit={e=>{
                  e.preventDefault();
                  setIsEditing(!isEditing);
                  }}>

                <h6>Profile Information</h6>
                <hr class="mt-0 mb-4"/>
                <div class="row pt-1">
                  <div class="col-12 mb-3">
                    <h6>Name</h6>
                    <p class="text-muted">
                    {isEditing ? (<input type="text" 
                    name="name"
                    //defaultValue={profile.name} 
                    value={profile.name}
                     onChange={e=>onChangeHandle(e)} />)
                    :(<span>{profile.name}</span>)}
                      
                    </p>
                  </div>
                  <div class="col-12 mb-3">
                    <h6>Email</h6>
                    <p class="text-muted">
                    {isEditing ? (<input type="email" 
                    name="email"
                    //defaultValue={profile.email}
                    value={profile.email} 
                    onChange={e=>onChangeHandle(e)}/>)
                    :(<span>{profile.email}</span>)}
                    </p>
                  </div>
                  <div class="col-12 mb-3">
                    <h6>Phone</h6>
                    <p class="text-muted">
                    {isEditing ? (<input type="text" 
                    name="contact"
                    //defaultValue={profile.contact}
                    value={profile.contact}
                     onChange={e=>onChangeHandle(e)}/>)
                    :(<span>{profile.contact}</span>)}
                    </p>
                  </div>
                  <div class="col-12 mb-3">
                    <h6>Password</h6>
                    <p class="text-muted">
                    {isEditing ? (<input type="password" 
                    name="password"
                    //defaultValue={profile.password} 
                    value={profile.password}
                    onChange={e=>onChangeHandle(e)}/>)
                    :(<span>{profile.password}</span>)}
                    </p>
                  </div>
                  
                  <div class="col-12 mb-3">
                   <button type="button" class="btn btn-warning" onClick={(e)=>onClick(e)}>
                   {isEditing ?
                     (<><i class="fa-solid fa-floppy-disk">
                      </i><span>save</span></>):
                     (<><i class="far fa-edit"></i><span>edit</span></>)}
                  </button>
                  
                  </div>
                </div>

             
              </form>
             
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

    </>
  );

}
export default Profile;