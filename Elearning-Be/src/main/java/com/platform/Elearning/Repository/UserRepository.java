package com.platform.Elearning.Repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.platform.Elearning.Model.User;

@Repository
public interface UserRepository extends JpaRepository<User, Integer> {

	User findByEmailAndPassword(String email, String password);
	
	List<User> findByRoleId(int roleId);
	
	//@Query(value = "SELECT * FROM elearning.users WHERE role_id = 1", nativeQuery = true)
	//List<User> findAllStudents();
	
	//@Query(value = "SELECT * FROM elearning.users WHERE role_id = 2", nativeQuery = true)
	//List<User> findAllLecturers();
}
