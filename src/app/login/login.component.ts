import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFire, AuthProviders, AuthMethods } from 'angularfire2';
import { Subscription } from 'rxjs/Subscription';
import 'rxjs/add/operator/first';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  constructor(
    private angularFire: AngularFire,
    private router: Router
  ) { }

  ngOnInit() {
    this.angularFire.auth
      .first()
      .subscribe((user) => {
        if (!!user) {
          this.router.navigate(['']);
        }
      });
  }

  githubLogin() {
    this.angularFire.auth.login({
      provider: AuthProviders.Github,
      method: AuthMethods.Redirect,
    });
  }
}
