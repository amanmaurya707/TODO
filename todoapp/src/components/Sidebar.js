import "../menubar.css";
import React from "react";
import "../bar.js";
import BarTest from "./BarTest.js";
import { Link, useNavigate } from "react-router-dom";
//import "/node_modules/bootstrap/dist/css/bootstrap.min.css"
//import "/node_modules/bootstrap/dist/js/bootstrap.min.js"
function Sidebar() {
 let navigate=useNavigate();
  const handleLogout = () => {
    localStorage.removeItem('email');
    navigate('/');
};

  return(
  
<div id="wrapper">
<aside id="sidebar-wrapper">
  <div class="sidebar-brand">
    <h2>Logo</h2>
  </div>
  <ul class="sidebar-nav" id="menu">
    <li class="active">
      <a href="#"><i class="fa fa-home"></i>Home</a>
    </li>
    <li class="nav-item">
    <Link class="nav-link" to="/viewtask" data-bs-toggle="collapse"  role="button" aria-expanded="false" aria-controls="collapseExample" data-bs-target="#collapseExample"><i class="fa fa-calendar-days"></i>Report
    <i class="fa fa-caret-down"></i>
       </Link>
       <div  class="collapse" id="collapseExample">
        <ul>
            <li class="nav-item"><Link to="/viewtask" class="nav-link" aria-current="page"><i class="fa-regular fa-eye"></i>View Task</Link>
            </li>
            <li class="nav-item"><Link to="/addtask" class="nav-link"><i class="fa-solid fa-plus"></i>Add Task</Link>
            </li>
        </ul>
        </div>
    </li>
    <li>
      <Link to="/profile"><i class="fa fa-user"></i>Profile</Link>
      
    </li>
    <li>
      <a href="#" onClick={handleLogout} ><i class="fa fa-arrow-up-from-bracket"></i>Logout</a>
    </li>
  </ul>
</aside>

<div id="navbar-wrapper">
    <nav class="navbar navbar-inverse">
      <div class="container">
        <div class="navbar-header">
          <button onClick={BarTest}>
          <a href="#" class="navbar-brand" id="sidebar-toggle"><i class="fa fa-bars"></i></a></button>
        </div>
      </div>
    </nav>
  </div>






  </div>);
}
export default Sidebar;
