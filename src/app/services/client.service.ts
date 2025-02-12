import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Client } from '../models/client.model';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  clientHardcoded = 'db/client.json';
  private http= inject(HttpClient);

  getClients(): Observable<Client[]> {
    return this.http.get<Client[]>(this.clientHardcoded);
  }

  getClientById(id: string): Observable<Client> {
    return this.getClients().pipe(
      map(clients => clients.find(client => client.id_client === id)!)
    );
  }

}
