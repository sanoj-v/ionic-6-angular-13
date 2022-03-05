import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ENV } from '../../environments/environment';
import { TOKEN_API, USER_API } from '../constant/endpoints';
import { HttpService } from './http.service';

@Injectable({
    providedIn: 'root'
})
export class LoginService {
    constructor(
        private _http: HttpService) { }
    GetUserInfo() {
        return this._http.get(ENV.origin, USER_API.GetUserInfo);
    }
    GenerateToken(data: any): Observable<any> {
        return this._http.post(ENV.origin, TOKEN_API.Generate, data, null, null, true);
    }
}