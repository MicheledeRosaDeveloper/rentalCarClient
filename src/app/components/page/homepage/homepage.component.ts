import { Component, OnInit } from '@angular/core';
import { RentalService } from 'src/app/services/rental.service';
import { UserService } from 'src/app/services/user.service';
import { Rental, RentalInfo, User } from 'src/app/Type';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  constructor(private rentalService:RentalService,private userService:UserService) { }
  users:User[]=[];
  rentals:RentalInfo[]=[];
  isAdmin = false;
  templateColumnsAdmin:string[] = ['userId','name','surname','email','role'];
  templateColumnsUser:string[] = ['rentalId','expireDate','bookingDate','vehicleModel','vehiclePlate'];
  ngOnInit(): void {
    this.isAdmin = this.userService.isAdmin;
    if(this.isAdmin){
      this.loadUsers();
    }
    else{
      this.loadRentals(sessionStorage.getItem('userID') as unknown as number);
    }
    console.log(this.isAdmin);
  }

  loadUsers():void{
    this.userService.getUsers().subscribe({
      next: (data: User[]) => {
        console.log(data);
        this.users = data.filter(user => user.role !== 'ADMIN');
      },
      error: (error) => {
        console.error('Errore durante il recupero degli utenti:', error);
      }
    });
  }
  loadRentals(userId:number):void{
    this.rentalService.getRentalByUserId(userId).subscribe({
      next: (data: Rental[]) => {
        console.log(data);
        this.rentals = data.map((rental:Rental) => {
          return {
            rentalId: rental.rentalId,
            bookingDate: rental.bookingDate,
            expireDate: rental.expireDate,
            vehicleModel: rental.rentedVehicle?.model as string,
            vehiclePlate: rental.rentedVehicle?.plate as string
          };
          
        }
        );
        console.log(this.rentals);
      },
      error: (error) => {
        console.error('Errore durante il recupero dei noleggi:', error);
      }
    });
  }


}
