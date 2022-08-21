import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map } from 'rxjs/operators';
import { User } from "../models/user.model";
import { BaseService } from "./base.service";

@Injectable({
    providedIn: 'root'
})
export class UserService extends BaseService{
    
    constructor(private http: HttpClient) { 
        super();
    }

    inserir(user: User) : Observable<string> {

        var header = new HttpHeaders({
            'Content-Type': 'application/json'
        })

        return this.http
        .post(`${this.UrlService}/users`, user, { headers: header, responseType: 'text' })
        .pipe(
            map(response => {
                return response
            })
        )
    }
}