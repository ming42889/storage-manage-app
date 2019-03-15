import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class EasyPostService {
    constructor(private http: HttpClient) { }

    baseUrl = 'https://lkjlkdjfls.herokuapp.com/api';
    // baseUrl = 'http://127.0.0.1:4200/api';

    createAddress(address): Observable<any> {
        return this.http.post(this.baseUrl +
            '/create-address', address);
    }


    createShipment(shipment): Observable<any> {
        return this.http.post(this.baseUrl +
            '/create-shipment', shipment);
    }
}