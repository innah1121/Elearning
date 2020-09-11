package com.platform.Elearning.Service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.platform.Elearning.Model.QuestionType;


@Service
public interface QuestionTypeService {
 
	QuestionType findById(int questionTypeId);
	
	public List<QuestionType> getAll();
}
