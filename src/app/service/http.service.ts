import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { API_ENDPOINT } from '../constant/endpoints';
import { CommonService } from './common.service';
import { UserStorage } from '../enum/global.enum';

@Injectable({
    providedIn: 'root'
})
export class HttpService {
    constructor(
        private _http: HttpClient,
        private _common: CommonService
    ) {
    }

    get(url: string, endpoint: API_ENDPOINT, params: any = null, skipToken: boolean = false): Observable<any> {
        const _options = this.constructHeaders(false, skipToken);
        return this._http.get(`${url}${this.constructUrl(endpoint, params)}`, _options);
    }

    post(url: string, endpoint: API_ENDPOINT, data: any, isMultipart: boolean = false, params = null, skipToken: boolean = false) {
        const _options = this.constructHeaders(isMultipart, skipToken);
        return this._http.post(`${url}${this.constructUrl(endpoint, params)}`, data, _options);
    }

    postFile(url: string, endpoint: API_ENDPOINT, data: any, isMultipart: boolean = false, params = null, skipToken: boolean = false) {
        const _options = this.constructHeaders(isMultipart, skipToken);
        return this._http.post(`${url}${this.constructUrl(endpoint, params)}`, data, _options);
    }

    put(url: string, endpoint: API_ENDPOINT, data: any, params = null, skipToken: boolean = false) {
        const _options = this.constructHeaders(false, skipToken);
        return this._http.put(`${url}${this.constructUrl(endpoint, params)}`, data, _options);
    }

    delete(url: string, endpoint: API_ENDPOINT, data = {}, params = null, skipToken: boolean = false) {
        const _options = this.constructHeaders(false, skipToken);
        return this._http.delete(`${url}${this.constructUrl(endpoint, params)}`, _options);
    }

    private _objectToQueryString(object) {
        return Object
            .keys(object)
            .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(object[key])}`)
            .join('&');
    }

    postGetFiles(url: string, endpoint: API_ENDPOINT, data: any, params = null, skipToken: boolean = false): Observable<Blob> {
        let head: HttpHeaders = new HttpHeaders({});
        return this._http.post<Blob>(`${url}${this.constructUrl(endpoint, params)}`, data, { headers: head, responseType: 'blob' as 'json' });
    }

    downloadFile(data, filename) {
        const blob = new Blob([data], { type: 'application/octet-stream' });
        const url = window.URL.createObjectURL(blob);
        let a = document.createElement("a");
        document.body.appendChild(a);
        a.href = url;
        a.download = filename;
        a.click();
        a.remove();
        window.URL.revokeObjectURL(url);
    }

    attachToken(options: any) {
        return
    }

    constructUrl(endpoint: API_ENDPOINT, params: Record<string, any>): string {
        const queryString = params ? this._objectToQueryString(params) : '';
        const newEndpoint = endpoint + (queryString ? '?' + queryString : '');
        return newEndpoint;
    }

    private constructHeaders(isMultipart: boolean, skipToken: boolean): any {
        let headers = new HttpHeaders();
        if (isMultipart) {
            headers = headers.append('Content-Type', 'multipart/form-data');
        }
        if (!skipToken) {
            headers = headers.append('Authorization', `Bearer ${this._common.getStorage(UserStorage.ACCESS_TOKEN)}`);
        }
        return { headers: headers };
    }
}