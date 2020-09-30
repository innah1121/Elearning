package com.platform.Elearning.Repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.platform.Elearning.Model.Exam;
import com.platform.Elearning.Model.StudentExam;
import com.platform.Elearning.Model.UserCourse;

@Repository
public interface StudentExamRepository extends  JpaRepository<StudentExam, Integer>{

	public List<StudentExam> findByUserId(@Param("userId")int userId);
	public List<StudentExam> findByExamId(@Param("examId")int examId);
//	@Query(value = "SELECT *\r\n" + 
//			" FROM elearn.students_exams \r\n" + 
//			" INNER JOIN elearn.exams ON students_exams.exam_id=exams .id\r\n" + 
//			" INNER JOIN elearn.users_courses ON students_exams.user_id=users_courses.users_id\r\n" + 
//			" where student_id = ?1 \r\n" + 
//			" and exam_id=1 = ?1 ", nativeQuery = true)
//    List<StudentExam> findByExamIdUserId(int userId , int examId);
	
	
}
