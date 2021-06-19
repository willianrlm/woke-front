import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable} from 'rxjs';
import {User} from "../model/user";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  token_key = 'token'
  user_key = 'user'

  constructor(private router: Router) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const token = localStorage.getItem(this.token_key)
    if (token) {
      return true
    } else {
      this.router.navigate(['home'])
      return false
    }
  }

  isActivate(): boolean {
    const token = localStorage.getItem(this.token_key)
    return !!token;
  }

  getToken(){
    return localStorage.getItem(this.token_key)
  }

  saveToken(token: string){
    if(!token){
      return
    }
    localStorage.removeItem(this.token_key)
    localStorage.setItem(this.token_key, token)
  }

  logout(){
    localStorage.removeItem(this.token_key)
    localStorage.removeItem(this.user_key)
  }

  setUser(user: User){
    localStorage.setItem(this.user_key, JSON.stringify(user))
  }

  getUser(){
    return JSON.parse(<string>localStorage.getItem(this.user_key))
  }

  removeUser(){
    localStorage.removeItem(this.user_key)
  }
}
