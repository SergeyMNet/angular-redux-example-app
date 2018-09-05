import { Injectable, OnDestroy, OnInit, ChangeDetectorRef } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class AuthService  {


    public login(): void {

        this.setSession({accessToken: 'some_fake_token' });
    }

    private setSession(authResult): void {

        // Set fake token
        localStorage.setItem('access_token', authResult.accessToken);
    }
}
