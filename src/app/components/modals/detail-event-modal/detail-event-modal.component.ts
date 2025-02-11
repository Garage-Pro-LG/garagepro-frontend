import { Component, Input, inject } from '@angular/core';
import { Event } from '../../../models/event.model';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Router, RouterModule } from '@angular/router';
import { BudgetComponent } from '../../../pages/budget/budget.component';

@Component({
  selector: 'app-detail-event-modal',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './detail-event-modal.component.html',
  styleUrl: './detail-event-modal.component.scss'
})
export class DetailEventModalComponent {

  @Input() event: any;

  modalService= inject(NgbModal);
  router = inject(Router);
  public activeModal = inject(NgbActiveModal);

  openBudget() {
    this.modalService.dismissAll();
    this.router.navigate(['/budget']);
  }

  backToCalendar() {
    this.modalService.dismissAll();
  }

}

