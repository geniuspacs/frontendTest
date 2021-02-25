import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TokenService } from '../../services/token.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {

  form: FormGroup;

  constructor(private fb: FormBuilder, private tokenService: TokenService, private router: Router) { }

  ngOnInit(): void {

    localStorage.clear();

    this.form = this.fb.group({
      username: [undefined, Validators.required],
      password: [undefined, [Validators.required, Validators.minLength(6)]]
    });

  }

  logIn() {
    this.tokenService.generateNewToken().toPromise()
      .then((result) => {
        this.tokenService.store(result.token);
        this.router.navigate(['/home']);
      });
  }

}
