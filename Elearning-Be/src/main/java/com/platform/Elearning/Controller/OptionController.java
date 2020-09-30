package com.platform.Elearning.Controller;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.platform.Elearning.Model.Exam;
import com.platform.Elearning.Model.Option;
import com.platform.Elearning.Service.OptionService;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class OptionController {

	@Autowired
	OptionService service;
	
	@PostMapping("/addOption")
	public ResponseEntity<Option> addOption(@Valid @RequestBody Option option) {
		Option optionToSave = service.createOption(option);
		return ResponseEntity.ok(optionToSave);
		
	}
}
