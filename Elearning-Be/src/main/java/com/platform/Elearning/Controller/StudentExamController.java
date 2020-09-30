package com.platform.Elearning.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.platform.Elearning.Model.Exam;
import com.platform.Elearning.Model.StudentExam;
import com.platform.Elearning.Repository.StudentExamRepository;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class StudentExamController {

	@Autowired
	StudentExamRepository repo;
	
	@GetMapping("/examsCourses/{userId}/{examId}")
	public List<StudentExam> findByExamIdUserId(@PathVariable int userId , @PathVariable int examId) {
		//return repo.findByExamIdUserId(userId,examId);
		return null;
	}
	
	@GetMapping("/examsStudents/{userId}")
	public List<StudentExam> findByIdUserId(@PathVariable int userId) {
		return repo.findByUserId(userId);
	}
	
	@GetMapping("/examsStudents/{examId}")
	public List<StudentExam> findByExamId(@PathVariable int examId) {
		return repo.findByExamId(examId);
	}
	
}
