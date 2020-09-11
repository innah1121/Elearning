package com.platform.Elearning.Service.Impl;

import java.util.List;
import java.util.Optional;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.platform.Elearning.Model.Role;
import com.platform.Elearning.Model.User;
import com.platform.Elearning.Repository.UserRepository;
import com.platform.Elearning.Service.UserService;

@Service
public class UserServiceImpl implements UserService {

	@Autowired
	UserRepository userRepository;
	
	protected Logger logger = LoggerFactory.getLogger(UserServiceImpl.class);

	
	@Override
	public List<User> getAll() {
		logger.info("Get all TipoCampagna...");
	    return userRepository.findAll();
	}


	@Override
	public User findUserById(int userId) {
		User user = userRepository.findById(userId).get();
        return user;
	}


	@Override
	public List<User> findbyRoleId(int roleId) {
		List<User> users = userRepository.findByRoleId(roleId);
		return users;
	}


	@Override
	public User addUser(User user , Role role) {
		
		User userToBeAdded   = new User();
		userToBeAdded.setEmail(user.getEmail());
		userToBeAdded.setName(user.getName());
		userToBeAdded.setSurname(user.getSurname());
		userToBeAdded.setPassword(user.getPassword());
		userToBeAdded.setRole(role);
		userToBeAdded = userRepository.save(userToBeAdded);
		return userToBeAdded;
	}


	@Override
	public Boolean deleteUser(int userId) {
		Optional<User> optUser = userRepository.findById(userId);
		if(optUser.isEmpty()) {
			return false;
		}
		User userToDelete = optUser.get();
		userRepository.delete(userToDelete);
		return true;
	}


	@Override
	public User updateUser(User user) {
		User u = userRepository.findById(user.getId()).get();
		u.setEmail(user.getEmail());
		u.setPassword(user.getPassword());
		return userRepository.save(u);
	}


	@Override
	public User authenticate(String email, String password) {
		User user = userRepository.findByEmailAndPassword(email, password);
        return user;
	}

}
