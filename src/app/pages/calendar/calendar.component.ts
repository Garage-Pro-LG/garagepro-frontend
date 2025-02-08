import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FullCalendarModule } from '@fullcalendar/angular';
import { CalendarOptions } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import bootstrapPlugin from '@fullcalendar/bootstrap';
import interactionPlugin from '@fullcalendar/interaction';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';

@Component({
  selector: 'app-calendar',
  standalone: true,
  imports: [ FullCalendarModule],
  templateUrl: './calendar.component.html',
  styleUrl: './calendar.component.scss'
})
export class CalendarComponent {

  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    plugins: [dayGridPlugin, bootstrapPlugin, interactionPlugin, timeGridPlugin, listPlugin],
    firstDay: 1,
    // themeSystem: 'bootstrap',
    headerToolbar: {
      left: 'title',
      center: 'dayGridMonth,listWeek',
      right: 'prev,today,next'
    },
    buttonText: {
      today: 'avui',
      month: 'mes',
      list: 'llista'
    }
  };
}
