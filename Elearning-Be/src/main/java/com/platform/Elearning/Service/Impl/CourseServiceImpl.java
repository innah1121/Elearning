package com.platform.Elearning.Service.Impl;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.platform.Elearning.Model.Course;

import com.platform.Elearning.Repository.CourseRepository;

import com.platform.Elearning.Service.CourseService;

@Service
public class CourseServiceImpl implements CourseService{
	@Autowired
	CourseRepository courseRepository;
	
	protected Logger logger = LoggerFactory.getLogger(CourseServiceImpl.class);

	@Override
	public List<Course> getAll() {
		logger.info("Get all TipoCampagna...");
	    return courseRepository.findAll();
	}

	@Override
	public Course findById(int courseId) {
		
		return courseRepository.findById(courseId).get();
	}

	@Override
	public Course addUser(Course c) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public List<Course> getLecturerCourses(int lecturerId) {
		// TODO Auto-generated method stub
		return courseRepository.findCourseByLecturerId(lecturerId);
	}
	
}
