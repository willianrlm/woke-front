import {Injectable} from '@angular/core';
import {User} from "../model/user";
import {MessagesService} from "./messages.service";
import {AuthGuard} from "../auth/auth.guard";
import {HttpClient, HttpParams} from "@angular/common/http";
import {AppConstants} from "../model/app-constants";
import {Router} from "@angular/router";
import {MessageType} from "../model/message";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  user: User

  constructor(private messageService: MessagesService, private auth: AuthGuard, private http: HttpClient, private router: Router) {
    this.user = this.defaultUser()
  }

  getUser(): any {
    if (!this.auth.isActivate()) {
      console.log('UserService:getUser(): não autenticado, retornando padrão')
      return this.user
    }else{
      console.log('UserService:getUser(): autenticado')
      if(this.auth.getUser() !== null && this.auth.getUser() !== ''){
        console.log('UserService:getUser(): autenticado, retornando de storage')
        console.log(this.auth.getUser())
        return this.auth.getUser()
      }else {
        this.http.get<any>(AppConstants.profile + '/' + this.user.login).subscribe(
          data => {
            this.user = data
            this.auth.setUser(this.user)
            console.log('UserService:getUser(): autenticado, retornando de api')
            return this.user
          }
        )
      }
    }
  }

  update(user: User){
    console.log('UserService:update(): atualizando')
    return this.http.put<any>(AppConstants.updateUser, user).subscribe(data => {
        if(data) {
          console.log('UserService:update(): atualizado na api')
          this.auth.setUser(user)
          this.messageService.add("Dados atualizados!", MessageType.SUCCESS)
        }else{
          this.messageService.add(AppConstants.error, MessageType.ERROR)
        }
      }, ()=>{
        this.messageService.add(AppConstants.communicationApiError, MessageType.ERROR)
      }
    )
  }

  authenticate(user: User) {
    console.log('UserService:authenticate(): atenticando')
    let body = new HttpParams()
    body = body.set('login', user.login)
    body = body.set('password', user.password)
    return this.http.post<any>(AppConstants.login, body).subscribe(data => {
        if(data) {
          console.log('UserService:authenticate(): autenticado, salvando em storage')
          this.auth.saveToken(data.token)
          this.http.get<any>(AppConstants.profile + '/' + this.user.login).subscribe(
            data => {
              this.user = data
              this.auth.setUser(this.user)
              this.messageService.add("Autenticado!", MessageType.SUCCESS)
              this.router.navigate(['/profile'])
            }
          )
        }else{
          this.messageService.add(AppConstants.error, MessageType.ERROR)
        }
      }, ()=>{
        this.messageService.add(AppConstants.userPassword, MessageType.ERROR)
      }
    )
  }

  logout() {
    console.log('UserService:logout(): desautenticado')
    this.messageService.clear()
    this.auth.logout();
    this.router.navigate(['/home'])
  }

  defaultUser(){
    return {
      id: -1,
      password: '123654',
      login: 'willianrlm',
      person: {
        id: 1,
        name: '',
        birthday: '',
        users: [],
        contacts: []
      }
    }
  }
}
