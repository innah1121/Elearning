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
	
	
	@Query(value = "SELECT * FROM elearn.exams\r\n" + 
			" left join elearn.students_exams on elearn.students_exams.exam_id=elearn.exams.id\r\n" + 
			" left join elearn.courses on elearn.courses.id=elearn.exams.course_id\r\n" + 
			" where user_id= ?1 ", nativeQuery = true)
    List<Exam> findUserCourseExam(@Param("userId")int userId);
}
