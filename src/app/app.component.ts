import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { SearchInputComponent } from './components/search-input/search-input.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ RouterOutlet, SidebarComponent, SearchInputComponent ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'garagepro-frontend';
}
