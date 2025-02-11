import { Component, Input, inject } from '@angular/core';
import { Event } from '../../../models/event.model';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Router, RouterModule } from '@angular/router';
import { BudgetComponent } from '../../../pages/budget/budget.component';
import { CalendarService } from '../../../services/calendar.service';
import { CarService } from '../../../services/car.service';
import { Car } from '../../../models/car.model';

@Component({
  selector: 'app-detail-event-modal',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './detail-event-modal.component.html',
  styleUrl: './detail-event-modal.component.scss'
})
export class DetailEventModalComponent {

  @Input() id_event!: string;


  modalService= inject(NgbModal);
  router = inject(Router);
  activeModal = inject(NgbActiveModal);
  calendarService = inject(CalendarService);
  carService = inject(CarService);

  eventDetails: Event | undefined;
  carDetails: Car | undefined;

  ngOnInit(): void {
    this.calendarService.getEventById(this.id_event).subscribe((event: Event) => {
      this.eventDetails = event;
      this.getCarDetails(event.car_id);
    });
  }

  getCarDetails(car_id: string): void {
    this.carService.getCarById(car_id).subscribe((car: Car) => {
      this.carDetails = car;

    });
  }

  openBudget() {
    this.modalService.dismissAll();
    this.router.navigate(['/budget']);
  }

  backToCalendar() {
    this.modalService.dismissAll();
  }

  openRepairDetails() {
    this.modalService.dismissAll();
    this.router.navigate(['/repairdetails', this.id_event]);
  }

}

