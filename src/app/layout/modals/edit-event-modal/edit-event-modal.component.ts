import { Component, inject } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-edit-event-modal',
  standalone: true,
  imports: [],
  templateUrl: './edit-event-modal.component.html',
  styleUrl: './edit-event-modal.component.scss'
})
export class EditEventModalComponent {

   public activeModal  = inject(NgbActiveModal);
}
