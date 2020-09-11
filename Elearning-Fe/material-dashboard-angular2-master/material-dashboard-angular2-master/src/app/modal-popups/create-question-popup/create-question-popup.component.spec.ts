import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateQuestionPopupComponent } from './create-question-popup.component';

describe('CreateQuestionPopupComponent', () => {
  let component: CreateQuestionPopupComponent;
  let fixture: ComponentFixture<CreateQuestionPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateQuestionPopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateQuestionPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
