import { Component } from '@angular/core';
import { CalendarButtonComponent } from '../../components/buttons/calendar-button/calendar-button.component';
import { BudgetButtonComponent } from '../../components/buttons/budget-button/budget-button.component';
import { AddEventButtonComponent } from '../../components/buttons/add-event-button/add-event-button.component';
import { SearchButtonComponent } from '../../components/buttons/search-button/search-button.component';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [
            CalendarButtonComponent,
            BudgetButtonComponent,
            AddEventButtonComponent,
            SearchButtonComponent
          ],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {

}
