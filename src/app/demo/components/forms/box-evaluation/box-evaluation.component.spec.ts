import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxEvaluationComponent } from './box-evaluation.component';

describe('BoxEvaluationComponent', () => {
  let component: BoxEvaluationComponent;
  let fixture: ComponentFixture<BoxEvaluationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BoxEvaluationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BoxEvaluationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
