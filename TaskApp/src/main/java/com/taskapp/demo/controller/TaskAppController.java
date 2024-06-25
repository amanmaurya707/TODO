package com.taskapp.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.taskapp.demo.entity.Status;
import com.taskapp.demo.entity.TaskApp;
import com.taskapp.demo.service.TaskAppService;



@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class TaskAppController {

@Autowired
TaskAppService service;
	
@GetMapping("/task/{email}") //get all task by email
public List<TaskApp> getAllTaskByEmail(@PathVariable String email)
{
 return  service.findAllTaskByEmail(email);
}

@GetMapping("/task/all")
public List<TaskApp> getAllTask()
{
 return  service.findAllTask();
}

@GetMapping("/task/bystatus/{email}/{status}")
public List<TaskApp> getTaskByStatus(@PathVariable String email,@PathVariable String status)
{ 
	
	return service.findTaskByStatus(email,status);
	
}

@GetMapping("/all/task/bystatus/{status}")

public List<TaskApp> findAllTaskByStatus(@PathVariable Status status)
{
	return service.findAllTaskByStatus(status);
}

//for post

@PostMapping("/task/add")
public TaskApp  saveTask(@RequestBody TaskApp task)
{
	return service.addTask(task);
	
}

//for put

@PutMapping("/task/update")
public TaskApp updateTask(TaskApp task)
{
	return service.editTask(task);
	 
}

@PutMapping("/task/update/status")
public void updateTaskStatusById(@RequestParam Long id,@RequestParam Status status)
{
	service.editTaskStatusById(id, status);
}

//for delete
@DeleteMapping("/task/delete/{id}")
public String  removeTask(@PathVariable Long id)
{
	return service.deleteTask(id);
	
}


}
