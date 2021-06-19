import { Injectable } from '@angular/core';
import {Observable, of} from "rxjs";
import {HttpClient, HttpParams} from "@angular/common/http";
import {AuthGuard} from "../auth/auth.guard";
import {AppConstants} from "../model/app-constants";
import {UserService} from "./user.service";
import {Company} from "../model/company";
import {MessageType} from "../model/message";
import {MessagesService} from "./messages.service";

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  constructor(private http: HttpClient,  private auth: AuthGuard, private userService: UserService) { }

  getAll(): Observable<any>{
    return this.http.get(AppConstants.companies + '/' + this.userService.user.login)
  }

  candidate(company: Company): Observable<any>{
    console.log('CompanyService:candidate(): '+company.candidate.opinion)
    return this.http.put<any>(AppConstants.candidate+'/'+company.id, company.candidate)
  }
}
