export interface IEvent {
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
}
