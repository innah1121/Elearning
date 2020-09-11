package com.platform.Elearning.Repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.platform.Elearning.Model.UserCourse;


@Repository
public interface UserCourseRepository extends JpaRepository<UserCourse, Integer>{
	
	@Query(value = "SELECT * FROM elearn.users_courses where user_id = ?1 ", nativeQuery = true)
	public List<UserCourse> findByUserId(@Param("userId")int userId);
	
	@Query(value = "SELECT UserCourse.course,Exam\r\n" + 
			"	FROM UserCourse \r\n" + 
			"	INNER JOIN Exam ON UserCourse.course.id=Exam.course.id\r\n" + 
			"	where UserCourse.user.id = ?1 ", nativeQuery = true)
    List<UserCourse> test(int userId);
	
	
	@Query(value = "SELECT *\r\n" + 
			"	FROM elearn.users_courses \r\n" + 
			"	INNER JOIN elearn.exams ON users_courses.course_id= exams.course_id\r\n" + 
			"	where user_id = ?1 ", nativeQuery = true)
    List<UserCourse> findUserCourseExam(int userId);
}
