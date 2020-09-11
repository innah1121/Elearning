package com.platform.Elearning.Codes;
import com.platform.Elearning.Model.Role;

public enum Roles {

	ADMINISTRATOR(new Role(1,"Admin")),
	PEDAGOG(new Role(2,"Pedagog")),
	STUDENT(new Role(3,"Student"));
	
	private Role value;
	
	Roles(Role role) {
		this.value = role;
	}
	
	public Role getValue() {
		return this.value;
	}
}
