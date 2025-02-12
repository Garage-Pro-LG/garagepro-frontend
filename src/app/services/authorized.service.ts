import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Authorized } from '../models/authorized.model';

@Injectable({
  providedIn: 'root'
})
export class AuthorizedService {

  authorizedHardcoded = 'db/authorized.json';
  private http= inject(HttpClient);

  getAuthorized(): Observable<Authorized[]> {
    return this.http.get<Authorized[]>(this.authorizedHardcoded);
  }

  getAuthorizedById(id: string): Observable<Authorized> {
    return this.getAuthorized().pipe(
      map(authorized => authorized.find(authorized => authorized.id_authorized === id)!)
    );
  }

}
