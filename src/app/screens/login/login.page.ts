import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuService } from '../../service/menu.service';
import { UserStorage } from '../../enum/global.enum';
import { LoginService } from '../../service/login.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { IResponse } from '../../interface/response.interface';
import { CommonService } from 'src/app/service/common.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  LoginForm: FormGroup;
  constructor(private _router: Router,
    private _menuService: MenuService,
    private _login: LoginService,
    private _fb: FormBuilder,
    private _common: CommonService) {
  }
  ngOnInit() {
    this.initForm();
  }
  initForm() {
    this.LoginForm = this._fb.group({
      Username: new FormControl("admin@gmail.com", [Validators.required]),
      Password: new FormControl(1234, [Validators.required]),
    })
  }
  onLogin() {
    this._common.showLoader();
    this._login.GenerateToken(this.LoginForm.value).subscribe((res: IResponse) => {
      this._common.hideLoader();
      this._common.setStorage(UserStorage.ACCESS_TOKEN, res.data.access_token);
      //this.getUserInfo();
      this._menuService.changeState(true);
      this._router.navigate(['home']);
    }, (err) => {
      this._common.hideLoader();
      this._common.showToast(err.error.message);
    });
    // this._loader.hide();
  }

  getUserInfo() {
    this._login.GetUserInfo().subscribe((res: IResponse) => {
      console.log(res.data);
    }, (err) => {
    });
  }
}
