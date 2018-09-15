import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from '../../environments/environment';

@Injectable({
    providedIn: 'root',
})
export class RegisterRestService {
    private regUrl = environment.regUrl;

    constructor(private httpClient: HttpClient) {
    }

    registerUser(user) {
        return this.httpClient.post(this.regUrl, user);
    }
}