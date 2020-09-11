package com.platform.Elearning.Service.Impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.platform.Elearning.Model.Question;
import com.platform.Elearning.Model.QuestionType;

import com.platform.Elearning.Repository.QuestionRepository;
import com.platform.Elearning.Service.QuestionService;
import java.util.List;

@Service
public class QuestionServiceImpl implements QuestionService {

	@Autowired
	QuestionRepository questionRepo;
	
	@Override
	public Question addQuestion(Question question, QuestionType type) {
		
		Question questionToAdd = new Question();
		questionToAdd.setContent(question.getContent());
		questionToAdd.setType(type);
		questionToAdd.setCourse(question.getCourse());
		questionToAdd = questionRepo.save(questionToAdd);
		return questionToAdd;
	}

	@Override
	public List<Question> findByCourseId(int courseId) {
		List<Question> list = questionRepo.findQuestionByCourseId(courseId);
		return list;
	}

	@Override
	public Question addQuestion(Question question) {
		Question questionToSave = new Question();
		questionToSave.setContent(question.getContent());
		questionToSave.setCourse(question.getCourse());
		questionToSave.setType(question.getType());
		questionToSave = questionRepo.save(questionToSave);
		return questionToSave;
	}

	


}
