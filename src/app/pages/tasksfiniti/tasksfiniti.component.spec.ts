import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TasksfinitiComponent } from './tasksfiniti.component';

describe('TasksfinitiComponent', () => {
  let component: TasksfinitiComponent;
  let fixture: ComponentFixture<TasksfinitiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TasksfinitiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TasksfinitiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
