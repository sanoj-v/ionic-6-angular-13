import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserStorage } from '../enum/global.enum';
import { CommonService } from '../service/common.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'dashboard.page.html',
  styleUrls: ['dashboard.page.scss'],
})
export class DashboardPage {

  constructor(private _router: Router,
    private _common: CommonService) {

    console.log(this._common.getStorage(UserStorage.ACCESS_TOKEN));
    
  }

  onLogout() {
    this._router.navigate(['login']);
  }
}
