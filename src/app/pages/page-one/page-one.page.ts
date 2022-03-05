import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-one',
  templateUrl: 'page-one.page.html',
  styleUrls: ['page-one.page.scss'],
})
export class MyComponentPage {

  constructor(private _router: Router) { }

  onLogout() {
    this._router.navigate(['login']);
  }
}
