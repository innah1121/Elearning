package com.platform.Elearning.Service;

import org.springframework.stereotype.Service;

import com.platform.Elearning.Codes.DTO;
import com.platform.Elearning.Model.UserUniversity;
import com.platform.Elearning.Model.UserCourse;
@Service
public interface UserUniversityService {

	public UserUniversity findUniversityInfoOfUser(int userId);
}
