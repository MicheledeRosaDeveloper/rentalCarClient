import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/Type';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  users!: User[] ;
  loading:boolean = true;
  constructor(private userService:UserService, private route:Router) { }
  columns:string[] = ['name','surname','role','actions'];
  ngOnInit(): void {
    this.loadUsers();
  
  }
  login(user:User):void{
    console.log('Utente selezionato:', user);
    sessionStorage.setItem('userID', user.userId.toString());
    sessionStorage.setItem('role', user.role);
    this.route.navigate(['/homepage']);
    
  }
  loadUsers():void{
    this.userService.getUsers().subscribe({
      next: (data: User[]) => {
        console.log(data);
        this.users = data;
        this.loading = false;
      },
      error: (error) => {
        console.error('Errore durante il recupero degli utenti:', error);
      }
    });
  }


}
