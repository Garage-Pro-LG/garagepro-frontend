import { Component, Input } from '@angular/core';
import { IEvent } from '../../interfaces/iEvent.interface';
import { CalendarService } from '../../services/calendar.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-event-details',
  standalone: true,
  imports: [ CommonModule],
  templateUrl: './event-details.component.html',
  styleUrl: './event-details.component.scss'
})
export class EventDetailsComponent {
  @Input() id_event!: string;
  eventDetails!: IEvent;


  constructor(private calendarService: CalendarService) {}

  ngOnInit(): void {
    this.loadEventDetails();
  }

  loadEventDetails(): void {
    this.calendarService.getEventById(this.id_event).subscribe(event => {
      this.eventDetails = event;
      console.log(this.eventDetails);
    });
  }
}
