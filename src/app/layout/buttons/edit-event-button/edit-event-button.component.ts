import { Component, inject } from '@angular/core';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { EditEventModalComponent } from '../../modals/edit-event-modal/edit-event-modal.component';

@Component({
  selector: 'app-edit-event-button',
  standalone: true,
  imports: [],
  templateUrl: './edit-event-button.component.html',
  styleUrl: './edit-event-button.component.scss'
})
export class EditEventButtonComponent {

   modalService = inject(NgbModal);
   modalConfig = inject(NgbModalConfig);

   editEventModal(){
     this.modalService.open(EditEventModalComponent,{ size: 'lg', centered: true, scrollable: true,})
   }

}
