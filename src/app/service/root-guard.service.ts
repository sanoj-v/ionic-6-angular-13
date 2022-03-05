import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { ENV } from 'src/environments/environment';
import { HttpService } from './http.service';
import { map, catchError, tap } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class RootGuard implements CanActivate {
    constructor(
        private _router: Router,
        private _http: HttpService
    ) { }

    canActivate(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<boolean> | Promise<boolean> | boolean {
        return this.apiCall().pipe(
            tap(allowed => {
                if (!allowed) this._router.navigate(["/login"]);
            })
        );
    }

    private apiCall(): Observable<boolean> {
        return this._http.get(ENV.origin, "TOKEN_API:GetUserInfo").pipe(
            map(res => true, error => false)
        );
    }
}