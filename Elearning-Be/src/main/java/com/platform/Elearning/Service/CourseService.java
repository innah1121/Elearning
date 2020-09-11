package com.platform.Elearning.Service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.platform.Elearning.Model.Course;
import com.platform.Elearning.Model.Role;
import com.platform.Elearning.Model.User;
@Service
public interface CourseService {

	public List<Course> getAll();
	
	public Course findById(int courseId);
	
	public Course addUser(Course c);
	
	public List<Course> getLecturerCourses(int lecturerId);
}
