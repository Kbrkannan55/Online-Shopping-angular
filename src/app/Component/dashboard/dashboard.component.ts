import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/Services/auth.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  constructor(private authService:AuthService) { }
  username:string=this.authService.getUsername()??"";
 ngOnInit(): void {
 }
}