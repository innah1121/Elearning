package com.platform.Elearning.Service;

import java.util.List;

import org.springframework.stereotype.Service;
import com.platform.Elearning.Model.Exam;
@Service
public interface ExamService {

	public List<Exam> getExamsByCourse(int courseId);
	
	public List<Exam> findUserCourseExam(int userId);
}
