import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {AppConstants} from "../model/app-constants";

@Injectable({
  providedIn: 'root'
})
export class PartnersService {

  constructor(private http: HttpClient) { }

  teste0(link:string): Observable<any>{
    let body = new HttpParams()

    let login = link.split('login=')[1].split('&')[0]
    let pass = link.split('password=')[1]

    console.log(login + ' - ' + pass)

    body = body.set('login', login)
    body = body.set('password', pass)
    return this.http.post(AppConstants.login, body)
  }

  teste1(link: string, token: string): Observable<any>{
    console.log(link)

    httpOptions.headers = httpOptions.headers.set('Authorization', 'Bearer '+token);

    return this.http.get(link, {headers: httpOptions.headers})
  }

  teste2(link: string, token: string): Observable<any>{
    console.log(link)

    httpOptions.headers = httpOptions.headers.set('Authorization', 'Bearer '+token);

    return this.http.get(link, {headers: httpOptions.headers})
  }

}

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    Authorization: 'my-auth-token'
  })
};
