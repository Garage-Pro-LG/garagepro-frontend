import { Component, inject, OnInit } from '@angular/core';

import { FullCalendarModule } from '@fullcalendar/angular';
import { CalendarOptions, EventClickArg } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import bootstrapPlugin from '@fullcalendar/bootstrap';
import interactionPlugin from '@fullcalendar/interaction';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { CalendarService } from '../../services/calendar.service';
import { Event } from '../../models/event.model';
import { DetailEventModalComponent } from '../../components/modals/detail-event-modal/detail-event-modal.component';



@Component({
  selector: 'app-calendar',
  standalone: true,
  imports: [ FullCalendarModule],
  templateUrl: './calendar.component.html',
  styleUrl: './calendar.component.scss'
})
export class CalendarComponent implements OnInit {

  calendarService= inject(CalendarService);
  modalService = inject(NgbModal);

  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    plugins: [dayGridPlugin, bootstrapPlugin, interactionPlugin, timeGridPlugin, listPlugin],
    firstDay: 1,
    headerToolbar: {
      left: 'title',
      center: 'dayGridMonth,listWeek',
      right: 'prev,today,next'
    },
    buttonText: {
      today: 'torna',
      month: 'mes',
      list: 'llistat cites'
    },
    events: []
  };

  ngOnInit(): void {
    this.calendarService.getEvents().subscribe((events: Event[]) => {
      const transformedEvents = events.map(event => ({
        title: `${event.booking_time}: ${event.id_event} `,
        start: event.booking_date,
        extendedProps: {
          id_event: event.id_event,

        }
      }));
      this.calendarOptions = {
        ...this.calendarOptions,
        events: transformedEvents,
        eventClick: this.handleEventClick.bind(this)
      };
    });
  }

  handleEventClick(arg: EventClickArg): void {
    const modalRef = this.modalService.open(DetailEventModalComponent, { size: 'md' });
    const id_event = arg.event.extendedProps['id_event']; // Obtener id_event de extendedProps
    modalRef.componentInstance.id_event = id_event; // Pasar solo id_event

  }
}




