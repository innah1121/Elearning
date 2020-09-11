package com.platform.Elearning.Repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.platform.Elearning.Model.Course;
import com.platform.Elearning.Model.UserCourse;

@Repository
public interface CourseRepository extends JpaRepository<Course, Integer> {

	@Query(value = "SELECT * FROM elearn.courses where teacher_id = ?1 ", nativeQuery = true)
    List<Course> findCourseByLecturerId(int lecturerId);
}
