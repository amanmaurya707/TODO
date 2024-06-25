import Login from "./components/Login";
import Register from "./components/Register";
import NotFound from "./components/Notfound";
import Task from "./components/Task";
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import UserDashboard from "./components/UserDashboard";
import Report from "./components/Report";
import Test from "./components/Test";
import Profile from "./components/Profile";
import ViewTask from "./components/ViewTask";
import AddTaskForm from "./components/CreateTask.js";
function App() {

  return (
    
   
  <BrowserRouter >
      <Routes>
        <Route path='/' element={<Login/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/register' element={<Register/>} />
        <Route path='/user' element={<UserDashboard/>} />
        <Route path='/report' element={<Report/>} />
        <Route path='/task' element={<Task/>} />
        <Route path='/addtask' element={<AddTaskForm/>} />
        <Route path='/test' element={<Test/>} />
        <Route path='/profile' element={<Profile/>} />
        <Route path='/viewtask' element={<ViewTask/>} />
        <Route path="*" element={<NotFound/>} />  
      </Routes>
  </BrowserRouter> 
   
  

  );
}

export default App;
