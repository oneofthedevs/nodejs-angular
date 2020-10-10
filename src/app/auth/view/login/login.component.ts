import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private http: AuthService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.createForm();
  }

  createForm(): void {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
  }

  async submit(): Promise<void> {
    try {
      const response = await this.http.login(this.loginForm.value);
      console.log(this.loginForm.value);
      if (response.token) {
        localStorage.setItem('token', response.token);
      }
      else {
        console.log('not authenticated');
      }
    }
    catch (err) {
      console.error(err);
    }
  }
}
