import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './login.service';
import { MenuService } from './menu.service';

@Injectable()
export class StartupService {
    constructor(
        private _login: LoginService,
        private _router: Router,
        private _menuService: MenuService) { }

    load(): Promise<boolean> {
        let promise = new Promise<boolean>((resolve, reject) => {
            this._login.GetUserInfo().subscribe(
                (response) => {
                    setTimeout(() => {
                        console.log("=======>", "Resolve");
                        this._menuService.changeState(true);
                        this._router.navigate(['home']);
                        resolve(true);
                    }, 7000);
                },
                (error) => {
                    console.log("=======>", "Reject");
                    setTimeout(() => {
                        this._menuService.changeState(false);
                        this._router.navigate(['login']);
                        resolve(false);
                    }, 7000);
                });
        });
        return promise;
    }
}