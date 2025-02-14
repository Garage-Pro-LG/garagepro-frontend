import { Client } from './client.model';
import { ICar } from '../interfaces/iCar.interface';

export class Car implements ICar {
  id_car: string;
  client_id: string;
  car_brand: string;
  model: string;
  insurance: string;
  insurance_policy: string;
  chassis: string;
  event_id: string;
  car_usage_type: string;
  car_status: string;
  car_details: string;
  created_at: Date;
  updated_at: Date;

  constructor(car: ICar) {
    this.id_car = car.id_car;
    this.client_id = car.client_id;
    this.car_brand = car.car_brand;
    this.model = car.model;
    this.insurance = car.insurance;
    this.insurance_policy = car.insurance_policy;
    this.chassis = car.chassis;
    this.event_id = car.event_id;
    this.car_usage_type = car.car_usage_type;
    this.car_status = car.car_status;
    this.car_details = car.car_details;
    this.created_at = car.created_at;
    this.updated_at = car.updated_at;
  }
}
