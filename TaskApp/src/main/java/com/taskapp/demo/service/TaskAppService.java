package com.taskapp.demo.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.taskapp.demo.entity.Status;
import com.taskapp.demo.entity.TaskApp;
import com.taskapp.demo.repository.TaskAppRepository;

import jakarta.transaction.Transactional;



@Service
public class TaskAppService {
	
@Autowired
TaskAppRepository repo;

//create task   //save task 

public TaskApp  addTask(TaskApp task)
{
	//if already register user then add the task
if(repo.findByEmail(task.getEmail())!=null)
{
	repo.save(task);
	return task;	
}
else
{
	//not register
	return null;
}
}

//edit task

public TaskApp editTask(TaskApp task)
{
	if(repo.findByEmail(task.getEmail())!=null && task.getId()!=null)
	{
		repo.save(task);
	}
	return task;
	
}

//edit task status by id 

@Transactional
public void editTaskStatusById(Long id,Status status)
{
	repo.updateTaskStatusById(id, status);
}

//delete task
public String deleteTask(Long id)
{
	if(repo.findById(id)!=null)
	{
		repo.deleteById(id);
		return "id is deleted";
	}
	return "id doesn't exist";
	
}

//view all task

public List<TaskApp> findAllTask()
{
	return repo.findAll();
}
  

// find all task by email //or single id or email
public List<TaskApp> findAllTaskByEmail(String email)
{
	if(repo.findByEmail(email)!=null)
	{
		return repo.findByEmail(email);
	}
	return null ;
	
}

//find task  by status //pending or completed
public List<TaskApp> findTaskByStatus(String email,String status)
{
    //find all task for specific use
	  List<TaskApp>  alltask=repo.findByEmail(email);
	  
	  List<TaskApp> alltaskbasedonstatus=new ArrayList<>();
	  
	  for(TaskApp task:alltask)
	  {
		  if(task.getStatus().equals(status))
		  {
			       alltaskbasedonstatus.add(task);
			       
		  }
	  }
	
		return alltaskbasedonstatus;
	
	
}


//find all task based on status for all user
public List<TaskApp> findAllTaskByStatus(Status status)
{
    
	if(repo.findByStatus(status)!=null)
	{
		return  repo.findByStatus(status);
	}
	else
	{
	return null;
	}
}





}
