import { Component } from '@angular/core';
import { CalendarButtonComponent } from '../../components/calendar-button/calendar-button.component';
import { BudgetButtonComponent } from '../../components/budget-button/budget-button.component';
import { AddEventButtonComponent } from '../../components/add-event-button/add-event-button.component';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [ CalendarButtonComponent, BudgetButtonComponent, AddEventButtonComponent],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {

}
