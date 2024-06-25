// Login.js


import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';


const Login = () => {
  //for navigation or redirecting pages
  let navigate=useNavigate();
  let [msg,setMsg]=useState(null);
  let [formData,setFormData]=useState({email:"",password:""});

  const handleChange = (e) => {
    setFormData({
        ...formData,
        [e.target.name]: e.target.value,
    });
};

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        const response = await axios.post('http://localhost:8080/login', formData);
        if (response.status === 200) {
           localStorage.setItem("email",formData.email);
            navigate('/user'); // Redirect on successful login
        }
    } catch (error) {
        setMsg('Invalid username or password');
    }
};


  return (
    <div className="bg-light py-3 py-md-5">
    <div className="container">
      <div className="row justify-content-md-center">
        <div className="col-12 col-md-11 col-lg-8 col-xl-7 col-xxl-6">
          <div className="bg-white p-4 p-md-5 rounded shadow-sm">
            <div className="row">
              <div className="col-12">
                <div className="mb-5">
                  <h3>Login</h3> <h2>{msg}</h2>
                </div>
              </div>
            </div>
            <form action="#!" onSubmit={(e)=>handleSubmit(e)}>
              <div className="row gy-3 gy-md-4 overflow-hidden">
                <div class="col-12">
                  <label htmlFor="email" className="form-label">Email <span className="text-danger">*</span></label>
                  <input type="email" className="form-control" name="email" id="email" placeholder="name@example.com" 
                  onChange={(e)=>handleChange(e)} value={formData.email} required/>
                </div>
                <div className="col-12">
                <label htmlFor="password" className="form-label">Password <span class="text-danger">*</span></label>
                <input type="password" className="form-control"  id="password" name="password" minLength="8" 
                onChange={(e)=>handleChange(e)} value={formData.password} 
                required/>
                </div>
                <div className="col-12">
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" name="remember_me" id="remember_me"/>
                    <label className="form-check-label text-secondary" htmlFor="remember_me">
                      Keep me logged in
                    </label>
                  </div>
                </div>
                <div className="col-12">
                  <div className="d-grid">
                    <button class="btn btn-lg  btn-warning" type="submit">Log in now</button>
                  </div>
                </div>
                <div className="row">
            <div className="col-12">
              <hr className="mt-5 mb-4 border-secondary-subtle"/>
              <div className="d-flex gap-2 gap-md-4 flex-column flex-md-row justify-content-md-center">
                <Link to="/register" className="link-secondary text-decoration-none">Don't have an account</Link>
                
              </div>
            </div>
          </div>
              </div>
            </form>
           
          </div>
        </div>
      </div>
    </div>
  </div>
  );
};

export default Login;