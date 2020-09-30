package com.platform.Elearning.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.platform.Elearning.Model.Option;

@Repository
public interface OptionRepository extends JpaRepository<Option, Integer> {

}
