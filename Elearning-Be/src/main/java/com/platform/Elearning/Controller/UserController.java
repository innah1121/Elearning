package com.platform.Elearning.Controller;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.platform.Elearning.Codes.Roles;
import com.platform.Elearning.Model.Role;
import com.platform.Elearning.Model.User;
import com.platform.Elearning.Repository.UserRepository;
import com.platform.Elearning.Service.UserService;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class UserController {
	
	@Autowired
	UserService userService;
	
	@GetMapping("/users")
	public List<User> getAllUsers() {
		return userService.getAll();
	}
	
	
	@GetMapping("/userById")
	public User getUserById(@RequestParam int id) {
		User user = userService.findUserById(id);
		return user;
	}
	
	@GetMapping("/userById/{id}")
	public User getUserByUserId(@PathVariable int id) {
		User user = userService.findUserById(id);
		return user;
	}
//
//	@GetMapping("/authenticate")
//	public User getUserById(@RequestParam String email,@RequestParam String password) {
//		User user = userService.findByEmailAndPassword(email, password);
//		return user;
//	}
	
	@GetMapping("/lecturers")
	public List<User> getLecturers() {
		return userService.findbyRoleId(2);
	}
	
	@GetMapping("/students")
	public List<User> getStudents() {
		return userService.findbyRoleId(3);
	}
	
	@PostMapping("/addLecturer")
	public ResponseEntity<User> addLecturer(@Valid @RequestBody User lecturer) {
		User savedUser = userService.addUser(lecturer , Roles.PEDAGOG.getValue());
		return ResponseEntity.ok(savedUser);
		
	}
	
	@PostMapping("/addStudent")
	public ResponseEntity<User> addStudent(@Valid @RequestBody User student) {
		User savedUser = userService.addUser(student , Roles.STUDENT.getValue());
		return ResponseEntity.ok(savedUser);
		
	}
	
	@DeleteMapping("/deleteUser/{userId}")
	public Boolean deleteUser(@PathVariable int userId) {
		Boolean isDeleted = userService.deleteUser(userId);
		return isDeleted;
	}
	
	@PutMapping("/updateUser")
	public ResponseEntity<User> updateuser(@Valid @RequestBody User user) {
		User savedUser = userService.updateUser(user);
		return ResponseEntity.ok(savedUser);
	}
	
	@GetMapping("/authenticate")
	public User getUserById(@RequestParam String email,@RequestParam String password) {
		User user = userService.authenticate(email, password);
		return user;
	}

}
