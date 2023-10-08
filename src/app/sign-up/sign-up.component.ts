import { Component } from '@angular/core';
import { AuthService } from '../services/auth/auth.service';
import { CustomvalidationService } from '../services/customvalidation/customvalidation.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
  constructor(public authService: AuthService,customValidationService:CustomvalidationService){

  }

  onSubmit() {
    
  }
}
