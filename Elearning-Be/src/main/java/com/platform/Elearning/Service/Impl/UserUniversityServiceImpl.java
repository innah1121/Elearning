package com.platform.Elearning.Service.Impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.platform.Elearning.Codes.DTO;
import com.platform.Elearning.Model.UserUniversity;
import com.platform.Elearning.Repository.UserUniversityRepository;
import com.platform.Elearning.Service.UserUniversityService;

@Service
public class UserUniversityServiceImpl implements UserUniversityService{

	@Autowired
	UserUniversityRepository repo;
	
	@Override
	public UserUniversity findUniversityInfoOfUser(int userId) {
		// TODO Auto-generated method stub
		UserUniversity uu = repo.findUserUniversityByUserId(userId);
		return uu;
	}

}
