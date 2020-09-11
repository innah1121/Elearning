package com.platform.Elearning.Service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.platform.Elearning.Model.Role;

@Service
public interface RoleService {

	public List<Role> getAll();
}
