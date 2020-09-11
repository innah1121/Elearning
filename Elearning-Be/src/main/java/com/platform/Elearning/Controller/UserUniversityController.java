package com.platform.Elearning.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.platform.Elearning.Codes.DTO;
import com.platform.Elearning.Model.User;
import com.platform.Elearning.Model.UserUniversity;
import com.platform.Elearning.Service.UserUniversityService;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class UserUniversityController {

	@Autowired
	UserUniversityService service;
	
	@GetMapping("/usersFacultyInfo")
	public UserUniversity findUniversityInfoOfUser(@RequestParam int userId) {
		UserUniversity userInfo = service.findUniversityInfoOfUser(userId);
		return userInfo;
	}
	
	@GetMapping("/usersFacultyInfo/{userId}")
	public UserUniversity findUniversityInfo(@PathVariable int userId) {
		UserUniversity userInfo = service.findUniversityInfoOfUser(userId);
		return userInfo;
	}
}
