package com.platform.Elearning.Codes;

import com.platform.Elearning.Model.QuestionType;


public enum QuestionTypes {

	YESORNO(new QuestionType(1,"Yes/No")),
	SINGLECHOICE(new QuestionType(2,"SingleChoice")),
	MULTIPLECHOICE(new QuestionType(3,"MultipleChoice"));
	
	private QuestionType value;
	
	QuestionTypes(QuestionType role) {
		this.value = role;
	}
	
	public QuestionType getValue() {
		return this.value;
	}
	
}
