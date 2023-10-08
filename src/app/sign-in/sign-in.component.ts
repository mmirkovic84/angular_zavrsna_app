import { Component } from '@angular/core';
import { AuthService } from '../services/auth/auth.service';
import { CustomvalidationService } from '../services/customvalidation/customvalidation.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent {
  constructor(public authService: AuthService,customValidationService:CustomvalidationService){

  }

  onSubmit() {
    
  }
 
}
