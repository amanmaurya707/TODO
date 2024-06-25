import Banner from "./Banner";
import Sidebar from "./Sidebar";
import { useLocation } from "react-router-dom";

function UserDashboard()
{
  //for get response data after redirect
  //let  location=useLocation();
 //let{user} =location.state;
let email=localStorage.getItem("email");
return(
<div class="container-fluid">
<div class="row">
<Sidebar></Sidebar>
<div class="col-12 mx-auto">
  <Banner></Banner>
</div>
<div class="" align="center">
Your Login Session With Email :{email}
</div>
</div>
</div>);

}
export default UserDashboard;