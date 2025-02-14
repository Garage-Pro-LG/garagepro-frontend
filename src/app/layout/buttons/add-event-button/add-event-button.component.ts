import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { AddEventModalComponent } from '../../modals/add-event-modal/add-event-modal.component';

@Component({
  selector: 'app-add-event-button',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './add-event-button.component.html',
  styleUrl: './add-event-button.component.scss'
})
export class AddEventButtonComponent {

  modalService = inject(NgbModal);
  modalConfig = inject(NgbModalConfig);

  addEventModal(){
    this.modalService.open(AddEventModalComponent,{ size: 'lg', centered: true, scrollable: true,})
  }
}
