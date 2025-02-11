import { IAuthorized } from "../interfaces/iAuthorized.interface";

export class Authorized implements IAuthorized {
  id_authorized: string;
  name: string;
  event_id: string;
  adress: string;
  city: string;
  phone: string;
  email: string;
  created_at: Date;
  updated_at: Date;

  constructor(authorized: IAuthorized) {
    this.id_authorized = authorized.id_authorized;
    this.name = authorized.name;
    this.event_id = authorized.event_id;
    this.adress = authorized.adress;
    this.city = authorized.city;
    this.phone = authorized.phone;
    this.email = authorized.email;
    this.created_at = authorized.created_at;
    this.updated_at = authorized.updated_at;
  }
}
