import { IEvent } from '../interfaces/iEvent.interface';

export class Event implements IEvent {
  id_event: string;
  car_id: string;
  damage: string;
  booking_date: Date;
  booking_time: Date;
  reparation_start: Date;
  reparation_end: Date;
  delayed_date: Date;
  hours_forecast: number;
  hours_real: number;
  courtesy_car: boolean;
  created_at: Date;
  updated_at: Date;

  constructor(data: IEvent) {
    this.id_event = data.id_event;
    this.car_id = data.car_id;
    this.damage = data.damage;
    this.booking_date = data.booking_date;
    this.booking_time = data.booking_time;
    this.reparation_start = data.reparation_start;
    this.reparation_end = data.reparation_end;
    this.delayed_date = data.delayed_date;
    this.hours_forecast = data.hours_forecast;
    this.hours_real = data.hours_real;
    this.courtesy_car = data.courtesy_car;
    this.created_at = data.created_at;
    this.updated_at = data.updated_at;
  }
}
