import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Car } from '../models/car.model';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  carsHardoded = 'db/car.json';
  private http= inject(HttpClient);

  getCars(): Observable<Car[]> {
    return this.http.get<Car[]>(this.carsHardoded);
  }

  getCarById(id: string): Observable<Car> {
    return this.getCars().pipe(
      map(cars => cars.find(car => car.id_car === id)!)
    );
  }


}
