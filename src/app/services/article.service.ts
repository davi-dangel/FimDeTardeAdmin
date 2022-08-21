import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map } from 'rxjs/operators';
import { Article } from "../models/article.model";
import { BaseService } from "./base.service";

@Injectable({
    providedIn: 'root'
})
export class ArticleService extends BaseService{
    
    constructor(private http: HttpClient) { 
        super();
    }

    inserir(article: Article) : Observable<any> {

        var header = new HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${this.token}`
        })

        return this.http
        .post(`${this.UrlService}/articles`, article, { headers: header, responseType: 'text' })
        .pipe(
            map(response => {
                return response
            })
        )
    }
}