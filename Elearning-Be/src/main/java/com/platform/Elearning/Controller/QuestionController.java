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

import com.platform.Elearning.Codes.QuestionTypes;
import com.platform.Elearning.Codes.Roles;
import com.platform.Elearning.Model.Course;
import com.platform.Elearning.Model.Question;
import com.platform.Elearning.Model.User;
import com.platform.Elearning.Repository.QuestionRepository;
import com.platform.Elearning.Service.QuestionService;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class QuestionController {

	@Autowired
	QuestionService questionService;
	
	@Autowired
	QuestionRepository questionRepository;
	
	@PostMapping("/addQuestion")
	public ResponseEntity<Question> addQuestion(@Valid @RequestBody Question question , String type) {
		Question savedQuestion = new Question();
		if(type.equals(QuestionTypes.YESORNO.getValue().getType())) {
			savedQuestion = questionService.addQuestion(question , QuestionTypes.YESORNO.getValue());
		}else if(type.equals(QuestionTypes.SINGLECHOICE.getValue().getType())) {
			savedQuestion = questionService.addQuestion(question , QuestionTypes.SINGLECHOICE.getValue());
		}else if(type.equals(QuestionTypes.MULTIPLECHOICE.getValue().getType())) {
			savedQuestion = questionService.addQuestion(question , QuestionTypes.SINGLECHOICE.getValue());
		}
		return ResponseEntity.ok(savedQuestion);
		
	}
	
	@GetMapping("/questions/{courseId}")
	public List<Question> getAllQuestionsByCourseId(@PathVariable int courseId) {
		return questionService.findByCourseId(courseId);
	}
	
	@GetMapping("/question/{id}")
	public Question getById(@PathVariable int id) {
		return questionRepository.findById(id).get();
	}
	
	@PostMapping("/createQuestion")
	public ResponseEntity<Question> addStudent(@Valid @RequestBody Question question) {
		Question savedQuestion = questionService.addQuestion(question);
		return ResponseEntity.ok(savedQuestion);
		
	}
}
