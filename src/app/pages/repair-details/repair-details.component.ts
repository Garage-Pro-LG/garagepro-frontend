import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IEvent } from '../../interfaces/iEvent.interface';
import { CalendarService } from '../../services/calendar.service';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { ICar } from '../../interfaces/iCar.interface';
import { CarService } from '../../services/car.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-repair-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './repair-details.component.html',
  styleUrl: './repair-details.component.scss'
})
export class RepairDetailsComponent {

  id_event!: string;
  eventDetails!: IEvent;
  carDetails!: ICar;
  calendarService = inject(CalendarService);
  carService= inject(CarService);
  route = inject(ActivatedRoute);

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.id_event = params.get('id')!;
      if (this.id_event) {
        console.log(this.id_event);
        this.loadEventDetails();
      } else {
        console.error('id_event es null');
      }
    });
  }

  loadEventDetails(): void {
    this.calendarService.getEventById(this.id_event).subscribe(event => {
        this.eventDetails = event;
        console.log(this.eventDetails);
        if (this.eventDetails.car_id && this.eventDetails.car_id) {
          this.loadCarDetails(this.eventDetails.car_id);
        } else {
          console.error('No se encontró el ID del coche en los detalles del evento');
        }
      });
  };

  loadCarDetails(carId: string): void {
    this.carService.getCarById(carId).subscribe(car => {
      this.carDetails = car;
      console.log(this.carDetails);
    });
  }
}






