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
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.platform.Elearning.Codes.Roles;
import com.platform.Elearning.Model.Course;
import com.platform.Elearning.Model.User;
import com.platform.Elearning.Repository.CourseRepository;
import com.platform.Elearning.Service.CourseService;


@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class CourseController {

	@Autowired
	CourseService courseService;
	
	@Autowired
	CourseRepository repo;
	
	@GetMapping("/courses")
	public List<Course> getAllCourses() {
		return courseService.getAll();
	}
	
	@GetMapping("/coursebyId/{id}")
	public Course getCourseById(@PathVariable int id) {
		Course course = courseService.findById(id);
		return course;
	}
	
	@GetMapping("/lecturerCourses/{id}")
	public List<Course> getLecturerCourses(@PathVariable int id) {
		List<Course> courses = courseService.getLecturerCourses(id);
		return courses;
	}
	
	@PostMapping("/addCourse")
	public ResponseEntity<Course> addCourse(@Valid @RequestBody Course course) {
		Course c = repo.save(course );
		return ResponseEntity.ok(c);
		
	}
}
