package com.userapp.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.userapp.demo.dto.Login;
import com.userapp.demo.entity.UserApp;
import com.userapp.demo.service.UserAppService;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class UserAppController {

@Autowired
UserAppService service;
	
@GetMapping("/user/{email}") //profile details
public UserApp getUserByEmail(@PathVariable String email)
{
 return  service.findUserByEmail(email);
}
@GetMapping("/user/all")
public List<UserApp> getAllUser()
{
 return  service.findAllUser();
}
@PostMapping("/login")
public boolean login(@RequestBody Login login)
{
	
	return service.checkLogin(login);
	
}

@PostMapping("/user/register")
public UserApp createUser(@RequestBody UserApp user)

{
	return  service.addUser(user);
	
}

@PutMapping("/user/update")
public UserApp updateUser(@RequestBody UserApp user)
{
	return service.editUser(user);
	
}

@DeleteMapping("/user/{id}")
public String removeUser(@PathVariable Long id)
{
	return service.deleteUser(id);
	
}
	


}
