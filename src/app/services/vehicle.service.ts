import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Vehicle } from '../Type';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {

  constructor(private httpClient:HttpClient) { }

  baseApiUrl = 'http://localhost:8080/api/v1/vehicles';

  getVehicles():Observable<Vehicle[]>{
    return this.httpClient.get<Vehicle[]>(this.baseApiUrl);
  }

  addVeichle(vehicle:Vehicle){
    return this.httpClient.post(this.baseApiUrl,vehicle);
  }

  deleteVehicle(id:number){
    return this.httpClient.delete(`${this.baseApiUrl}/${id}`);
  }

  updateVehicle(vehicle:Vehicle){
    return this.httpClient.put(`${this.baseApiUrl}/${vehicle.id}`,vehicle);
  }
}
