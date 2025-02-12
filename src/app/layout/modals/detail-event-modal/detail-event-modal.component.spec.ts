import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailEventModalComponent } from './detail-event-modal.component';

describe('DetailEventModalComponent', () => {
  let component: DetailEventModalComponent;
  let fixture: ComponentFixture<DetailEventModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetailEventModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailEventModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
