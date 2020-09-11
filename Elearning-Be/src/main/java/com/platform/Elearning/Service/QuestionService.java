package com.platform.Elearning.Service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.platform.Elearning.Model.Question;
import com.platform.Elearning.Model.QuestionType;
import com.platform.Elearning.Model.Role;
import com.platform.Elearning.Model.User;

@Service
public interface QuestionService {

	public Question addQuestion(Question question , QuestionType type);
	
	public List<Question> findByCourseId(int courseId);
	
	public Question addQuestion(Question question);
}
