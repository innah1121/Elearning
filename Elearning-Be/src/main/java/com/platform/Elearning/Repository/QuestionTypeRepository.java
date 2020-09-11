package com.platform.Elearning.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.platform.Elearning.Model.QuestionType;

@Repository
public interface QuestionTypeRepository extends JpaRepository<QuestionType, Integer>{

}
