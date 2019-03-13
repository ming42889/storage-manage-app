import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class EasyPostService {
    constructor(private http: HttpClient) { }

    baseUrl = 'https://lkjlkdjfls.herokuapp.com/api';

    createFromAddress(address): Observable<any> {
        return this.http.post(this.baseUrl +
            '/create-from-address', address);
    }

}