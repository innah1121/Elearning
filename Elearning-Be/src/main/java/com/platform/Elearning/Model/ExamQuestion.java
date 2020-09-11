package com.platform.Elearning.Model;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "exams_questions")
public class ExamQuestion {

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY) 
	@Column(name = "id")
	private int id;
	
	@OneToOne(cascade = CascadeType.MERGE)
	@JoinColumn(name = "question_id", referencedColumnName = "id")
	private Question question;
	
	@ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "exam_id")
	private Exam exam;

}