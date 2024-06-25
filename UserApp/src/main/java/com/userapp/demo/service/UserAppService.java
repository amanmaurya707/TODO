package com.userapp.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.userapp.demo.dto.Login;
import com.userapp.demo.entity.UserApp;
import com.userapp.demo.repository.UserAppRepository;

@Service
public class UserAppService {
	
@Autowired
UserAppRepository repo;

//create user   //save user 

public UserApp addUser(UserApp user)
{
	
if(repo.findByEmail(user.getEmail())==null)
{
	repo.save(user);
	return user;	
}
else
{
	return null;
}
}

//edit user 

public UserApp editUser(UserApp user)
{
	if(repo.findByEmail(user.getEmail())!=null)
	{
		repo.save(user);
	}
	return user;
	
}

//delete user
public String deleteUser(Long id)
{
	if(repo.findById(id)!=null)
	{
		repo.deleteById(id);
		return "id is deleted";
	}
	return "id doesn't exist";
	
}

//view all user

public List<UserApp> findAllUser()
{
	return repo.findAll();
}
  

// find user by id or email
public UserApp findUserByEmail(String email)
{
	if(repo.findByEmail(email)!=null)
	{
		return repo.findByEmail(email);
	}
	return null ;
	
}

//find user and validate it

public boolean checkLogin(Login login)
{
	  //User user = userRepository.findByUsername(username);
     // return user != null && user.getPassword().equals(password);
	//login(@RequestParam String username, @RequestParam String password) 
	UserApp user= repo.findByEmail(login.getEmail());
	if(user !=null && user.getPassword().equals(login.getPassword()))
	{
		return true;
	}
	else
	{

	return false;
	}
}





}
