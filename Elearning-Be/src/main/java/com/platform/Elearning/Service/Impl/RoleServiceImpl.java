package com.platform.Elearning.Service.Impl;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.platform.Elearning.Model.Role;
import com.platform.Elearning.Model.User;
import com.platform.Elearning.Repository.RoleRepository;
import com.platform.Elearning.Repository.UserRepository;
import com.platform.Elearning.Service.RoleService;

@Service
public class RoleServiceImpl implements RoleService{
	
	@Autowired
	RoleRepository roleRepository;
	
	protected Logger logger = LoggerFactory.getLogger(UserServiceImpl.class);

	
	@Override
	public List<Role> getAll() {
		logger.info("Get all TipoCampagna...");
	    return roleRepository.findAll();
	}

}
