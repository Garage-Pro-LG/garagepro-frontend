import { Component, Input } from '@angular/core';
import { IClient } from '../../interfaces/iClient.interface';
import { ClientService } from '../../services/client.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-client-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './client-details.component.html',
  styleUrl: './client-details.component.scss'
})
export class ClientDetailsComponent {

  @Input()  clientDetails!: IClient;
  clientId!: string;


  constructor(private clientService: ClientService) {}

  ngOnInit(): void {
    this.loadClientDetails();
  }

  loadClientDetails(): void {
    this.clientService.getClientById(this.clientId).subscribe(client => {
      this.clientDetails = client;
      console.log(this.clientDetails);
    });
  }

}
