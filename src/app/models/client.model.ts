import { IClient } from '../interfaces/iClient.interface';

export class Client implements IClient {
  id_client: string;
  name: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  state: string;
  zip: string;
  country: string;
  created_at: Date;
  updated_at: Date;

  constructor(client: IClient) {
    this.id_client = client.id_client;
    this.name = client.name;
    this.email = client.email;
    this.phone = client.phone;
    this.address = client.address;
    this.city = client.city;
    this.state = client.state;
    this.zip = client.zip;
    this.country = client.country;
    this.created_at = client.created_at;
    this.updated_at = client.updated_at;
  }
}
