import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BudgetButtonComponent } from './budget-button.component';

describe('BudgetButtonComponent', () => {
  let component: BudgetButtonComponent;
  let fixture: ComponentFixture<BudgetButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BudgetButtonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BudgetButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
