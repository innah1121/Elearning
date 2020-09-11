package com.platform.Elearning.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.platform.Elearning.Model.Role;import com.platform.Elearning.Service.RoleService;


@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class RoleController {

	@Autowired
	RoleService roleService;
	
	@GetMapping("/roles")
	public List<Role> getAllRoles() {
		return roleService.getAll();
	}
	
}
