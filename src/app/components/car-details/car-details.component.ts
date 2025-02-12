import { Component, Input } from '@angular/core';
import { ICar } from '../../interfaces/iCar.interface';
import { CarService } from '../../services/car.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-car-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './car-details.component.html',
  styleUrl: './car-details.component.scss'
})
export class CarDetailsComponent {

  @Input() carDetails!: ICar;
  carId!: string;


  constructor(private carService: CarService) {}

  ngOnInit(): void {
    this.loadCarDetails();
  }

  loadCarDetails(): void {
    this.carService.getCarById(this.carId).subscribe(car => {
      this.carDetails = car;
      console.log(this.carDetails);
    });
  }

}
