package com.platform.Elearning.Repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.platform.Elearning.Model.Question;
import com.platform.Elearning.Model.UserUniversity;
@Repository
public interface QuestionRepository extends JpaRepository<Question, Integer>{

	public List<Question> findQuestionByCourseId(@Param("courseId")int courseId);
}
