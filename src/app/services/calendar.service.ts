import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Event } from '../models/event.model';


@Injectable({
  providedIn: 'root'
})
export class CalendarService {

  private eventsHardcoded = 'db/event.json';
  private http= inject(HttpClient);

  getEvents(): Observable<Event[]> {
    return this.http.get<Event[]>(this.eventsHardcoded);
  }

  getEventById(id: string): Observable<Event> {
    return this.http.get<Event>(this.eventsHardcoded + '/' + id);
  }

}
