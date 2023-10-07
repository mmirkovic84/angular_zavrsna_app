import { Component } from '@angular/core';
import { AuthService } from '../services/auth/auth.service';
import { User } from '../shared/models/User';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  constructor(public authService: AuthService){
   
  }
  
}
