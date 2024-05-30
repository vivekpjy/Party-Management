import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {PartyService} from '../../service/party.service';
import {AlertMessageService} from '../../service/alert-message.service';
import { AuthService } from '../../auth-service/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm!:FormGroup;

  constructor(private fb: FormBuilder, private router: Router, private partyService: PartyService
    ,private alertMsg:AlertMessageService, private authService: AuthService,
  ){
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      const { username, password } = this.loginForm.value;
      this.authService.login(username, password).subscribe((response:any) => {
        if (response) {
          this.router.navigate(['/party-list']);
        } else {
          // handle login error
        }
      });
    }
  }

}
