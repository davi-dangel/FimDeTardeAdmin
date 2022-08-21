import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map } from 'rxjs/operators';
import { Login } from "../models/login.model";
import { User } from "../models/user.model";
import { BaseService } from "./base.service";

@Injectable({
    providedIn: 'root'
})
export class LoginService extends BaseService{
    
    constructor(private http: HttpClient) { 
        super();
    }

    authenticate(login: Login) : Observable<string> {
        return this.http
        .post(`${this.UrlService}/login`, login,  {responseType: 'text'})
        .pipe(
            map(response => {
                var token = JSON.parse(response)["token"]
                var user = JSON.parse(response)["user"]
                this.loadSession(token, user)
                return response
            })
        )
    }

    private loadSession(token: string, user: string) : void {
        sessionStorage.setItem('token', token)
        sessionStorage.setItem('loggedUser', user)
    }

}