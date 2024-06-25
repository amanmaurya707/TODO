import React from "react";
import Sidebar from "./Sidebar";
import Task from "./Task";
function Report()
{
  return(
    <div class="container-fluid">
    <div class="row">
    <Sidebar></Sidebar>
    <div class="" align="right">
    <Task></Task>
    </div>
    </div>
    </div>
    );
}
export default Report;