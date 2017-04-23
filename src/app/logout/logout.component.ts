import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFire } from 'angularfire2';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent implements OnInit {

  constructor(
    private angularFire: AngularFire,
    private router: Router
  ) { }

  ngOnInit() {
    this.angularFire.auth.logout();
    this.router.navigate(['']);
  }
}
