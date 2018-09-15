import { Http, RequestOptions } from '@angular/http'
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { CookieService } from 'ngx-cookie-service';


@Injectable({
    providedIn: 'root',
})
export class AppRestService {
    private baseUrl = "http://192.168.10.79";
    private port = "3500";
    private primaryUrl = this.baseUrl + ":" + this.port;

    private userByTokenURL = this.primaryUrl + "/user";
    private userByIdURL = this.primaryUrl + "/user_id";
    private logInURL = this.primaryUrl + "/auth/sign_in";
    private registerURL = this.primaryUrl + "/auth/register";
    private newProductURL = this.primaryUrl + "/create/deliverable";

    private deliveriesURL = this.primaryUrl + "/search/request/assigned_delivery";
    private deliveriesPendingURL = this.primaryUrl + "/search/request/requested_delivery";
    private changeStatusURL = this.primaryUrl + "/approve/post";

    private pickUpGetURL = this.primaryUrl + "/to_pick";
    private dropOffGetURL = this.primaryUrl + "/to_deliver";

    constructor(private http: Http,
                private httpClient: HttpClient,
                private cookie: CookieService) {
    }

    getUserByToken() {
        var token = this.cookie.get('token');
        return this.httpClient.post(this.userByTokenURL, {token: token});
    }

    getUserById(id) {
        return this.httpClient.post(this.userByIdURL, {_id: id})
    }

    logInUser(email, password) {
        var tmp = {email: email, password: password};
        return this.httpClient.post(this.logInURL, tmp);
    }  

    registerUser(user) {
        return this.httpClient.post(this.registerURL, user);
    }

    addNewDelivery(product) {
        var token = this.cookie.get('token');
        let headers = new HttpHeaders().set('Content-Type', 'application/json')
                               .set('authorization', token);
        return this.httpClient.post(this.newProductURL, product, {headers});
    }

    getAllDeliveries() {
        var token = this.cookie.get('token');
        let headers = new HttpHeaders().set('Content-Type', 'application/json')
                               .set('authorization', token);
        return this.httpClient.get<any[]>(this.deliveriesURL, {headers});
    }

    getPendingDeliveries() {
        var token = this.cookie.get('token');
        let headers = new HttpHeaders().set('Content-Type', 'application/json')
                               .set('authorization', token);
        return this.httpClient.get<any[]>(this.deliveriesPendingURL, {headers})
    }

    changeDeliveryRequestStatus(id, status) {
        var token = this.cookie.get('token');
        let headers = new HttpHeaders().set('Content-Type', 'application/json')
                               .set('authorization', token);
        var tmp = {
            _id: id,
            status: status
        }
        return this.httpClient.post(this.changeStatusURL, tmp, {headers})
    }

    getPickUp() {
        var token = this.cookie.get('token');
        let headers = new HttpHeaders().set('Content-Type', 'application/json')
                               .set('authorization', token);
        return this.httpClient.get<any[]>(this.pickUpGetURL, {headers})
    }

    getDropUp() {
        var token = this.cookie.get('token');
        let headers = new HttpHeaders().set('Content-Type', 'application/json')
                               .set('authorization', token);
        return this.httpClient.get<any[]>(this.dropOffGetURL, {headers})
    }
}