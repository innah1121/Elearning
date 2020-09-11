package com.platform.Elearning.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.platform.Elearning.Codes.DTO;
import com.platform.Elearning.Model.UserUniversity;

@Repository
public interface UserUniversityRepository extends JpaRepository<UserUniversity, Integer>{
	
   public UserUniversity findUserUniversityByUserId(@Param("userId")int userId);
}
