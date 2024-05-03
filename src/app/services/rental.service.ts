import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Rental } from '../Type';

@Injectable({
  providedIn: 'root'
})
export class RentalService {

  constructor(private httpClient:HttpClient) { }

  baseApiUrl = 'http://localhost:8080/api/v1/rentals';


  getAllRentals():Observable<Rental[]>{
    return this.httpClient.get<Rental[]>(this.baseApiUrl);
  }
  getRentalByUserId(userId:number):Observable<Rental[]>{
    return this.httpClient.get<Rental[]>(`${this.baseApiUrl}/${userId}/rentedCar`);
  }

}
