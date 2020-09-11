package com.platform.Elearning.Service.Impl;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.platform.Elearning.Model.Role;
import com.platform.Elearning.Model.University;
import com.platform.Elearning.Repository.RoleRepository;
import com.platform.Elearning.Repository.UniversityRepository;
import com.platform.Elearning.Service.UniversityService;

@Service
public class UniversityServiceImpl implements UniversityService{

	@Autowired
	UniversityRepository uniRepository;
	
	protected Logger logger = LoggerFactory.getLogger(UserServiceImpl.class);
	
	@Override
	public List<University> getAll() {
		logger.info("Get all universities...");
	    return uniRepository.findAll();
	}
	
}
