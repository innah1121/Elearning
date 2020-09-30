package com.platform.Elearning.Service.Impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.platform.Elearning.Model.Option;
import com.platform.Elearning.Repository.OptionRepository;
import com.platform.Elearning.Service.OptionService;

@Service
public class OptionServiceImpl implements OptionService{

	@Autowired
	OptionRepository repo;
	
	@Override
	public Option createOption(Option option) {
		Option op = new Option();
		op.setContent(option.getContent());
		op.setCorrect(option.isCorrect());
		op.setQuestion(option.getQuestion());
		op = repo.save(op);
		return op;
		
	}

}
