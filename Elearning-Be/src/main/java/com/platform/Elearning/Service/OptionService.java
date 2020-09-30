package com.platform.Elearning.Service;

import org.springframework.stereotype.Service;

import com.platform.Elearning.Model.Option;

@Service
public interface OptionService {

	public Option createOption(Option option);
}
