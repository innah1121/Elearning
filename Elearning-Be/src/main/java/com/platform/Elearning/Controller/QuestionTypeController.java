package com.platform.Elearning.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.platform.Elearning.Model.QuestionType;
import com.platform.Elearning.Model.User;
import com.platform.Elearning.Service.QuestionTypeService;
import com.platform.Elearning.Service.UserService;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class QuestionTypeController {


	@Autowired
	QuestionTypeService service;
	
	@GetMapping("/typeById/{id}")
	public QuestionType getTypeById(@PathVariable int id) {
		QuestionType type = service.findById(id);
		return type;
	}
	
	@GetMapping("/types")
	public List<QuestionType> getAll() {
		return service.getAll();
	}
}
