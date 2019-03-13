import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { EasyPostService } from '../shared/easy-post.service';

@Component({
    selector: 'app-create-from-address',
    templateUrl: 'create-from-address.component.html'
})
export class CreateFromAddressComponent {
    address: any = {};
    result: any = {};

    constructor(private http: HttpClient, private easyPostService: EasyPostService) {
    }

    create() {
        this.easyPostService.createFromAddress(this.address)
            .subscribe(
                result => {
                    console.log(result);
                    this.result.content = JSON.stringify(result);
                }
            );
    }
}
