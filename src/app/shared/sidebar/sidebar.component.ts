import { Component } from '@angular/core';
import { CalendarButtonComponent } from '../../layout/buttons/calendar-button/calendar-button.component';
import { BudgetButtonComponent } from '../../layout/buttons/budget-button/budget-button.component';
import { AddEventButtonComponent } from '../../layout/buttons/add-event-button/add-event-button.component';
import { SearchButtonComponent } from '../../layout/buttons/search-button/search-button.component';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [
            CalendarButtonComponent,
            BudgetButtonComponent,
            AddEventButtonComponent,

          ],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {

}
