package com.platform.Elearning.Service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.platform.Elearning.Model.StudentExam;

@Service
public interface StudentExamService {
	
	public List<StudentExam> examsByStudetId(int studentid);
	
	public List<StudentExam> findByUserId(int studentId) ;
	

}
