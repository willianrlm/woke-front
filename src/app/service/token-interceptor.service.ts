import {Injectable, Injector} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Observable} from "rxjs";
import {AuthGuard} from "../auth/auth.guard";

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor{

  constructor(protected injector: Injector) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let auth = this.injector.get(AuthGuard)

    if(!auth.isActivate()){
      return next.handle(req)
    }

    let tokenizedReq = req.clone({
      setHeaders: {
        Authorization: 'Bearer '+auth.getToken()
      }
    })

    return next.handle(tokenizedReq);
  }
}
