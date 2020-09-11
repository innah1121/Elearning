package com.platform.Elearning.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.platform.Elearning.Model.University;

@Repository
public interface UniversityRepository extends JpaRepository<University, Integer> {

}
