package com.platform.Elearning.Model;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import lombok.Data;
@Data
@Entity()
@Table(name = "exams")
public class Exam {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY) 
	@Column(name = "id")
	private int id;
	
	@Column(name = "name")
	private String name;
	
	//course_id
	@OneToOne(cascade = CascadeType.MERGE)
	@JoinColumn(name = "course_id", referencedColumnName = "id")
	private Course course;
	
}
