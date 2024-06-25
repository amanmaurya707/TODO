
import React from "react";
import { useState } from "react";
//import { useNavigate } from "react-router-dom";
function DatePicker()
{
let [date,setDate]=useState(null);
//for adding history to redirect
//const navigate = useNavigate();
function changeDate(e)
{
  setDate(e.target.value);
 // navigate('/task', { state: {date } });

}
return(
<div class="container">
  <div>
<span align="left">Date :{date}</span>
<span class="col-6" align="right"><input type="date" name="date" id="date" onChange={e=>changeDate(e)}/>
</span>
</div>
</div>);
}
export default DatePicker;
