import { Http, RequestOptions } from '@angular/http'
import { map} from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { HttpHeaderResponse, HttpHeaders } from '@angular/common/http';
import { HttpClient } from "@angular/common/http";
import { debug } from 'util';
import { environment } from '../../environments/environment';


@Injectable({
    providedIn: 'root',
})
export class LogInRestService {
    private logInUrl = environment.logInUrl;

    constructor(private http: Http,
                private httpClient: HttpClient) {
    }

    logInUser(email, password) {
        var tmp = {email: email, password: password};
        return this.httpClient.post(this.logInUrl, tmp);
    }  
}