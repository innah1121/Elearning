package com.platform.Elearning.Repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.platform.Elearning.Model.Exam;
import com.platform.Elearning.Model.UserCourse;

@Repository
public interface ExamRepository extends JpaRepository<Exam, Integer> {
    
	public List<Exam> findByCourseId(@Param("courseId")int courseId);
	
	
	@Query(value = "SELECT *\r\n" + 
			"	FROM elearn.exams \r\n" + 
			"	INNER JOIN elearn.users_courses ON users_courses .course_id=exams .course_id\r\n" + 
			"	where users_id = ?1 ", nativeQuery = true)
    List<Exam> findUserCourseExam(int userId);
}
