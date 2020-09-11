package com.platform.Elearning.Service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.platform.Elearning.Model.University;

@Service
public interface UniversityService {

	public List<University> getAll();
}
