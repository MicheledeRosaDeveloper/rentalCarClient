import { Injectable } from '@angular/core';
import { User } from '../Type';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private httpClient:HttpClient) { }

  baseApiUrl = 'http://localhost:8080/api/v1/customers';
  getUsers():Observable<User[]>{
    return this.httpClient.get<User[]>(this.baseApiUrl);
  }
  addUser(user:User){
    return this.httpClient.post<User>(this.baseApiUrl,user);
  }
  deleteUser(id:number){
    return this.httpClient.delete(`${this.baseApiUrl}/${id}`);
  }
  updateUser(user:User){
    return this.httpClient.put(`${this.baseApiUrl}/${user.userId}`,user);
  }
  get isAdmin():boolean{
    return sessionStorage.getItem('role') === 'ADMIN';
  }
}
