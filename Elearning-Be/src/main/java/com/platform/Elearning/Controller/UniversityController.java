package com.platform.Elearning.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.platform.Elearning.Model.University;
import com.platform.Elearning.Service.UniversityService;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class UniversityController {

	@Autowired
	UniversityService uniService;
	
	@GetMapping("/universities")
	public List<University> getAllRoles() {
		return uniService.getAll();
	}
}
