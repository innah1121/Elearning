package com.platform.Elearning.Service.Impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.platform.Elearning.Model.Exam;
import com.platform.Elearning.Repository.ExamRepository;
import com.platform.Elearning.Service.ExamService;

@Service
public class ExamServiceImpl implements ExamService{

	@Autowired
	ExamRepository repo;
	
	@Override
	public List<Exam> getExamsByCourse(int courseId) {
		
		return repo.findByCourseId(courseId);
	}

}
