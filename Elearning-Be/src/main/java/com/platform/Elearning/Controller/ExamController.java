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
import com.platform.Elearning.Model.Exam;
import com.platform.Elearning.Model.Role;
import com.platform.Elearning.Model.User;
import com.platform.Elearning.Model.UserCourse;
import com.platform.Elearning.Repository.ExamRepository;
import com.platform.Elearning.Service.ExamService;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class ExamController {

	@Autowired
	ExamService service;
	@Autowired
	ExamRepository repo;
	
	@GetMapping("/examsByCourse/{courseId}")
	public List<Exam> getExamsByCourseId(@PathVariable int courseId) {
		return service.getExamsByCourse(courseId);
	}
	
	@GetMapping("/examsCourses/{userId}")
	public List<Exam> getUserCoursesExams(@PathVariable int userId) {
		return repo.findUserCourseExam(userId);
	}
	
	@PostMapping("/addExam")
	public ResponseEntity<Exam> addExam(@Valid @RequestBody Exam exam) {
		Exam examToSave = repo.save(exam);
		return ResponseEntity.ok(examToSave);
		
	}
	
	@GetMapping("/findUserCourseExam/{userId}")
	public List<Exam> findUserCourseExam(@PathVariable int userId) {
		return repo.findUserCourseExam(userId);
	}
}
