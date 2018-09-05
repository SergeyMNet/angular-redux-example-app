import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { HttpResponse } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';


@Injectable()
export class TokenInterceptor implements HttpInterceptor {

    constructor() {}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        const token: string = localStorage.getItem('access_token');

        if (token === null) {
            return next.handle(req);
        } else {
            const authHeader = 'Bearer ' + token;
            const authReq = req.clone({ headers: req.headers.set('Authorization', authHeader) });
            return next.handle(authReq);
        }
    }

}
