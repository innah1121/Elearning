package com.platform.Elearning.Service.Impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.platform.Elearning.Model.QuestionType;
import com.platform.Elearning.Repository.QuestionTypeRepository;
import com.platform.Elearning.Service.QuestionTypeService;

@Service
public class QuestionTypeServiceImpl implements QuestionTypeService{

	@Autowired
	QuestionTypeRepository repo;
	
	@Override
	public QuestionType findById(int questionTypeId) {
		QuestionType q = repo.findById(questionTypeId).get();
		return q;
	}

	@Override
	public List<QuestionType> getAll() {
		return repo.findAll();
	}

}
