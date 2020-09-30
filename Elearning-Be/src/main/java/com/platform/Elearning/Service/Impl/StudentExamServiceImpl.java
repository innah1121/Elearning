package com.platform.Elearning.Service.Impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.platform.Elearning.Model.StudentExam;
import com.platform.Elearning.Repository.StudentExamRepository;
import com.platform.Elearning.Service.StudentExamService;

@Service
public class StudentExamServiceImpl implements StudentExamService{

	@Autowired
	StudentExamRepository repo;
	@Override
	public List<StudentExam> examsByStudetId(int studentid) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public List<StudentExam> findByUserId(int studentId) {
		return repo.findByUserId(studentId);
	}

}
