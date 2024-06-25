import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
function Register()
{
// form values tracking  name,email,password,confirmpassword
const formInitialValue={email:"",name:"",contact:"",password:"",confirmpassword:""};
let [formValue,setFormValue]=useState(formInitialValue);
// form error tracking   name,email,password,confirmpassword
let [formErrors,setFormErrors]=useState({});

//for axios msg var
let [msg,setMsg]=useState(null);

//use navigate for redirect another page after using axios
let navigate=useNavigate();

//setting all onchange value simultaneously
 const onChangeHandle =(e)=>
{
  //console.log(e.target)
const {name,value}=e.target;
//console.log(name);
//console.log(...formValue);
setFormValue({...formValue,[name]:value});
handleValidation();
}
//
const handleValidation = () => {
 
  let formIsValid = true;
  let validationError={};

  //Email
  if(!formValue.name.trim()){
    formIsValid = false;
    validationError["email"] = "Cannot be empty";
  }
  else if(typeof formValue["email"] !== "undefined"){
    if(!String(formValue["email"]).match(/^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/))
  {
  
  
        formIsValid = false;
         validationError["email"] = "Invalid Email";
      }
    }

   //Name
   if(!formValue.name.trim()){
    formIsValid = false;
    validationError["name"] = "Cannot be empty";
  }
 else if(typeof formValue["name"] !== "undefined"){
    if(!String(formValue["name"]).match(/^[a-zA-Z]+$/)){
      formIsValid = false;
      validationError["name"] = "Only letters";
    }       
  }

  // ^\d{10}$    //ph no.
  if(!formValue.contact.trim()){
    formIsValid = false;
    validationError["contact"] = "Cannot be empty";
  } 
  else if(typeof formValue["contact"] !== "undefined")
  {
    if(!String(formValue["contact"]).match(/^\d{10}$/)){
      formIsValid = false;
      validationError["contact"] = "Invalid Contact Number";
    } 
    
  }
// password and confirm password  ///^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/
//I use the following script for min 8 letter password, with at least a symbol, upper and lower case letters and a number
///^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/
if(!formValue.password.trim()){
  formIsValid = false;
  validationError["password"] = "Cannot be empty";
}
else if(typeof formValue["password"] !== "undefined")
  {
    if(!String(formValue["password"]).match(/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/)){
      formIsValid = false;
      validationError["password"] = "Invalid password must contain atleast one upper case,lower case,number and one special character and min 8 character are required";
    } 
  }
//confirm password
if(!formValue.confirmpassword.trim()){
  formIsValid = false;
  validationError["confirmpassword"] = "Cannot be empty";
}
else if(formValue.password!==formValue.confirmpassword)
{
  formIsValid = false;
  validationError["confirmpassword"] = "password and confirm password not match";
}


  setFormErrors(validationError);
  return formIsValid;
}
// axios library backend communication
const handleSubmit = async (e) => {
  e.preventDefault();
  try {
      const response = await fetch('http://localhost:8080/user/register', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
              'Access-Control-Allow-Origin':'*'
          },
          body: JSON.stringify(formValue)
      });
      if (response.ok) {
          setMsg("User registered successfully");
          console.log('User registered successfully');
         // navigate("/user",{ state: { user: response.data } });
         navigate("/login");
      } else {
          setMsg("Failed to register user");
          console.log('Failed to register user');
      }
  } catch (error) {
      console.error('Error:', error);
  }
}
//
return(
<div>

<div class="bg-light py-3 py-md-5">
  <div class="container">
    <div class="row justify-content-md-center">
      <div class="col-12 col-md-11 col-lg-8 col-xl-7 col-xxl-6">
        <div class="bg-white p-4 p-md-5 rounded shadow-sm">
          <div class="row">
            <div class="col-12">
              <div class="mb-5">
                <h2 class="h3">Registration</h2>   <h1>{msg}

                </h1>
                <h3 class="fs-6 fw-normal text-secondary m-0">Enter your details to register</h3> <span></span>
              </div>
            </div>
          </div>
          <form action="#!" onSubmit= {e => handleSubmit(e)}>
            <div class="row gy-3 gy-md-4 overflow-hidden">
             
              <div class="col-12">
                <label for="email" class="form-label">Email <span class="text-danger">*{formErrors["email"]}</span></label>
                <input type="text" class="form-control" name="email" id="email" placeholder="name@example.com" value={formValue.email} onChange={e=>onChangeHandle(e)}/>
              </div>
              <div class="col-12">
                <label for="name" class="form-label">Name <span class="text-danger">*{formErrors["name"]}</span></label>
                <input type="text" class="form-control" name="name" id="name" placeholder="name" value={formValue.name} onChange={e=>onChangeHandle(e)}/>
              </div>
              <div class="col-12">
                <label for="contact" class="form-label">Contact <span class="text-danger">*{formErrors["contact"]}</span></label>
                <input type="text" class="form-control" name="contact" id="contact" placeholder="contact" value={formValue.contact} onChange={e=>onChangeHandle(e)}/>
              </div>
              <div class="col-12">
                <label for="password" class="form-label">Password <span class="text-danger">*{formErrors["password"]}</span></label>
                <input type="password" class="form-control" name="password" id="password"  value={formValue.password} onChange={e=>onChangeHandle(e)}/>
              </div>
              <div class="col-12">
                <label for="confirmpassword" class="form-label">Confirm Password <span class="text-danger">*{formErrors["confirmpassword"]}</span></label>
                <input type="password" class="form-control" name="confirmpassword" id="confirmpassword"  value={formValue.confirmpassword}
                onChange={e=>onChangeHandle(e)}/>
              </div>
              <div class="col-12">
                <div class="form-check">
                  <input class="form-check-input" type="checkbox" value="" name="iAgree" id="iAgree" required/>
                  <label class="form-check-label text-secondary" for="iAgree">
                    I agree to the <a href="#!" class="link-primary text-decoration-none">terms and conditions</a>
                  </label>
                </div>
              </div>
              <div class="col-12"> 
                <div class="d-grid">
                  <button class="btn btn-lg btn-warning" type="submit">Sign up</button>
                </div>
              </div>
            </div>
          </form>
          <div class="row">
            <div class="col-12">
              <hr class="mt-5 mb-4 border-secondary-subtle"/>
              <div class="col-12">
                <p class="m-0 text-secondary text-center">Already have an account? <Link to="/login" class="link-primary text-decoration-none">Sign in</Link></p>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  </div>
</div>
</div>);
}

export default Register;