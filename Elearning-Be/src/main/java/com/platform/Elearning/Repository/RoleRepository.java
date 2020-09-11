package com.platform.Elearning.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.platform.Elearning.Model.Role;

@Repository
public interface RoleRepository extends JpaRepository<Role, Integer>{

}
