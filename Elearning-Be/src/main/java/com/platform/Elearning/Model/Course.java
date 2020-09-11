package com.platform.Elearning.Model;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import lombok.Data;
@Data
@Entity()
@Table(name = "courses")
public class Course {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY) 
	@Column(name = "id")
	private int id;
	
	@Column(name = "name")
	private String name;
	
	//teacher_id
	@ManyToOne(cascade = CascadeType.MERGE)
	@JoinColumn(name = "teacher_id", referencedColumnName = "id")
	private User teacher;
	


}
