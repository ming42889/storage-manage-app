import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EasyPostService } from '../shared/easy-post.service';

@Component({
    selector: 'app-shipment-form',
    templateUrl: 'shipment-form.component.html'
})
export class ShipmentFormComponent {
    shipment: any = {
        from: {},
        to: {}
    };
    result: any = {};

    constructor(private http: HttpClient, private easyPostService: EasyPostService) {
    }

    createAddress(address, saveToField: string) {
        this.easyPostService.createAddress(address)
            .subscribe(
                result => {
                    console.log(result);
                    this.shipment[saveToField] = result;
                }
            );
    }

    toJSONString(obj) {
        return JSON.stringify(obj);
    }




    create() {
        this.easyPostService.createAddress(this.shipment)
            .subscribe(
                result => {
                    console.log(result);
                    this.result.content = JSON.stringify(result);
                }
            );
    }
}
