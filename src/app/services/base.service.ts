import { HttpHeaders } from "@angular/common/http"

export abstract class BaseService {

    protected UrlService: string = "https://localhost:5006/api"

    token: string

    constructor() {
        this.token = sessionStorage.getItem('token') || ''
    }

    protected obterHeaderJson(){
        return {
            headers: new HttpHeaders({
                'Access-Control-Allow-Origin': 'http://localhost:4200' ,
                'content-type': 'application/json; charset=utf-8',
                'Access-Control-Allow-Headers': 'Content-Type',
                'Access-Control-Allow-Methods': 'GET,POST,OPTIONS,DELETE,PUT',
                'Authotization' : `Bearer ${this.token}`
            })
        };
    }

    protected extrairDados(response: any){
        return response
    }
}