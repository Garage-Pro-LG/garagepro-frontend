import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IEvent } from '../../interfaces/iEvent.interface';
import { CalendarService } from '../../services/calendar.service';

import { ICar } from '../../interfaces/iCar.interface';
import { CarService } from '../../services/car.service';
import { CommonModule } from '@angular/common';
import { IClient } from '../../interfaces/iClient.interface';
import { IAuthorized } from '../../interfaces/iAuthorized.interface';
import { ClientService } from '../../services/client.service';
import { AuthorizedService } from '../../services/authorized.service';
import { EventDetailsComponent } from '../../components/event-details/event-details.component';
import { CarDetailsComponent } from '../../components/car-details/car-details.component';
import { ClientDetailsComponent } from '../../components/client-details/client-details.component';

import { EditEventButtonComponent } from '../../layout/buttons/edit-event-button/edit-event-button.component';


@Component({
  selector: 'app-repair',
  standalone: true,
  imports: [
    CommonModule,
    EventDetailsComponent,
    CarDetailsComponent,
    ClientDetailsComponent,
    EditEventButtonComponent
  ],
  templateUrl: './repair.component.html',
  styleUrl: './repair.component.scss'
})
export class RepairComponent {

  id_event: string = '';
  carId: string = '';
  clientId: string = '';
  authorizedId: string = '';

  eventDetails!: IEvent;
  carDetails!: ICar;
  clientDetails!: IClient;
  authorizedDetails!: IAuthorized;

  calendarService = inject(CalendarService);
  carService = inject(CarService);
  clientService = inject(ClientService);
  authorizedService = inject(AuthorizedService);
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
      if (this.carDetails.client_id) {
        this.loadClientDetails(this.carDetails.client_id);
      } else {
        console.error('No se encontró el ID del cliente en los detalles del coche');
      }
    });
  }

  loadClientDetails(clientId: string): void {
    this.clientService.getClientById(clientId).subscribe(client => {
      this.clientDetails = client;
      console.log(this.clientDetails);
    });
  }

}






