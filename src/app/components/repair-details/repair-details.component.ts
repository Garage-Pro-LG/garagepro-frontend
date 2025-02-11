import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IEvent } from '../../interfaces/iEvent.interface';
import { CalendarService } from '../../services/calendar.service';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-repair-details',
  standalone: true,
  imports: [],
  templateUrl: './repair-details.component.html',
  styleUrl: './repair-details.component.scss'
})
export class RepairDetailsComponent {

  id_event: string = '';
  repairDetails: IEvent = {
    id_event: '',
    car_id: '',
    damage: '',
    booking_date: new Date(),
    booking_time: '',
    reparation_start: new Date(),
    reparation_end: new Date(),
    delayed_date: new Date(),
    hours_forecast: 0,
    hours_real: 0,
    courtesy_car:false,
    created_at: new Date(),
    updated_at: new Date(),
  };

  private route= inject(ActivatedRoute);
  public calendarService= inject(CalendarService);
  public modalService= inject(NgbModal);
  public config= inject(NgbModalConfig);

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id_event = params['id_event'];
      if (this.id_event) {
        this.showRepairDetails(this.id_event);
      } else {
        console.error('id_event is undefined');
      }
    });

  }

  showRepairDetails(id:string){
    if (!id) {
      console.error('Invalid id:', id);
      return;
    }
    this.calendarService.getEventById(id).subscribe((data) => {
      this.repairDetails = data;
      console.log(data);
    });
  }



}
