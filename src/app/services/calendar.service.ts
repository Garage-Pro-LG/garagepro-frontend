import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { map, Observable } from 'rxjs';
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
  //Harcoded data:
  getEventById(id: string): Observable<Event> {
    return this.getEvents().pipe(
      map(events => events.find(event => event.id_event === id)!)
    );
  }

}
