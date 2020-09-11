package com.platform.Elearning.Service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.platform.Elearning.Model.Course;
import com.platform.Elearning.Model.Role;
import com.platform.Elearning.Model.User;
import com.platform.Elearning.Model.UserCourse;

@Service
public interface UserCourseService {

	public List<UserCourse> getCoursesOfUser(int userId);
	
	public UserCourse registerStudent(int userId , int courseId);
}
