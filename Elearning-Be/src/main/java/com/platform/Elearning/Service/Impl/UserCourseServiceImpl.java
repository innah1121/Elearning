package com.platform.Elearning.Service.Impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.platform.Elearning.Model.Course;
import com.platform.Elearning.Model.User;
import com.platform.Elearning.Model.UserCourse;
import com.platform.Elearning.Repository.UserCourseRepository;
import com.platform.Elearning.Service.CourseService;
import com.platform.Elearning.Service.UserCourseService;
import com.platform.Elearning.Service.UserService;

@Service
public class UserCourseServiceImpl implements UserCourseService {

	@Autowired
	UserCourseRepository repo;
	
	@Autowired
	UserService userSer;
	
	@Autowired
	CourseService cService;
	
	@Override
	public List<UserCourse> getCoursesOfUser(int userId) {
		
		return repo.findByUserId(userId);
	}

	@Override
	public UserCourse registerStudent(int userId, int courseId) {
		UserCourse uc = new UserCourse();
		User u = userSer.findUserById(userId);
		Course c = cService.findById(courseId);
		uc.setCourse(c);
		uc.setUser(u);
		return uc;
	}

}
