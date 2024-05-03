import { Component, OnInit } from '@angular/core';
import { VehicleService } from 'src/app/services/vehicle.service';
import { Vehicle } from 'src/app/Type';

@Component({
  selector: 'app-car-park',
  templateUrl: './car-park.component.html',
  styleUrls: ['./car-park.component.css']
})
export class CarParkComponent implements OnInit {

  vehicles!: Vehicle[];
  templateColumns: string[] = ['vehicleId', 'plate', 'vehicleType', 'model', 'carBrand', 'registrationYear'];


  constructor(private vehicleService: VehicleService) { }

  ngOnInit(): void {
    this.loadVehicles();
  }

  loadVehicles():void{
    this.vehicleService.getVehicles().subscribe({
      next: (data: Vehicle[]) => {
        console.log(data);
        this.vehicles = data;
      },
      error: (error) => {
        console.error('Errore durante il recupero degli utenti:', error);
      }
    });
  }

}
