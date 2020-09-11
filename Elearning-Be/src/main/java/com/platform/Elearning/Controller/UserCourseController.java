package com.platform.Elearning.Controller;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.platform.Elearning.Codes.Roles;
import com.platform.Elearning.Model.Course;
import com.platform.Elearning.Model.User;
import com.platform.Elearning.Model.UserCourse;
import com.platform.Elearning.Repository.UserCourseRepository;
import com.platform.Elearning.Service.UserCourseService;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class UserCourseController {
	
	@Autowired
	UserCourseService service;
	
	@Autowired
	UserCourseRepository repo;

	@GetMapping("/userCourses/{userId}")
	public List<UserCourse> getAllUserCourses(@PathVariable int userId) {
		return service.getCoursesOfUser(userId);
	}
	
	@GetMapping("/userCoursesExams/{userId}")
	public List<UserCourse> getUserCoursesExams(@PathVariable int userId) {
		return repo.findUserCourseExam(userId);
	}
	
	@PostMapping("/registerStudent")
	public ResponseEntity<UserCourse> registerStudent(@Valid @RequestBody UserCourse c){
		System.out.print(c);
		UserCourse registeredStudent=repo.save(c);
		return ResponseEntity.ok(registeredStudent);
		
	}
	
	@PostMapping("/registerStudent/{studentId}/{courseId}")
	public ResponseEntity<UserCourse> registerStudent(@PathVariable int studentId,@PathVariable int courseId){
		UserCourse registeredStudent=service.registerStudent(studentId , courseId);
		return ResponseEntity.ok(registeredStudent);
		
	}
	
}
