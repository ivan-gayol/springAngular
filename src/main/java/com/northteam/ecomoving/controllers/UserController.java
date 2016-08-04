/**
 * 
 */
package com.northteam.ecomoving.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.northteam.ecomoving.entities.User;
import com.northteam.ecomoving.repositories.UserRespository;

/**
 * @author igayolfernan
 *
 */
@RestController
@RequestMapping("/users")
public class UserController {
	
	@Autowired
	private UserRespository repo;
	
	@RequestMapping(method = RequestMethod.GET)
	public List<User> findUsers(){
		return repo.findAll();
	}
	
	@RequestMapping(method = RequestMethod.POST)
	public User addUser(@RequestBody User user){
		user.setId(null);
		return repo.saveAndFlush(user);
	}
	
	@RequestMapping(value = "/{id}", method = RequestMethod.PUT)
	public User updateUser (@RequestBody User updatedUser, @PathVariable Long id){
		updatedUser.setId(id);
		return repo.saveAndFlush(updatedUser);
	}
	
	@RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
	public void deleteUser (@PathVariable Long id){
		repo.delete(id);
	}

}
