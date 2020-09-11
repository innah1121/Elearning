import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterStudentInCourseComponent } from './register-student-in-course.component';

describe('RegisterStudentInCourseComponent', () => {
  let component: RegisterStudentInCourseComponent;
  let fixture: ComponentFixture<RegisterStudentInCourseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterStudentInCourseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterStudentInCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
