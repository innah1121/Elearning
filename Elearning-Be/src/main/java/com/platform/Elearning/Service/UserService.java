package com.platform.Elearning.Service;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Service;

import com.platform.Elearning.Model.Role;
import com.platform.Elearning.Model.User;

@Service
public interface UserService {
	
	public List<User> getAll();

	public User findUserById(int userId);
	
	@Query("SELECT * FROM User u where u.roleId = :roleId")
	public List<User> findbyRoleId(int roleId);
	
	public User addUser(User user, Role role);
	
	public Boolean deleteUser(int userId);
	
	public User updateUser(User user);
	
	public User authenticate(String email,String password);
}
