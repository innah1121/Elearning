package com.platform.Elearning.Controller;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import com.platform.Elearning.Model.ExamQuestion;
import com.platform.Elearning.Repository.ExamQuestionRepository;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class ExamQuestionController {

	@Autowired 
	ExamQuestionRepository examQuestionRepository;
	
	@PostMapping("/addExamQuestion")
	public ResponseEntity<ExamQuestion> addExamQuestion(@Valid @RequestBody ExamQuestion exam) {
		ExamQuestion examToSave = examQuestionRepository.save(exam);
		return ResponseEntity.ok(examToSave);
	}
}
