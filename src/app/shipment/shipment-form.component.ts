import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EasyPostService } from '../shared/easy-post.service';

@Component({
    selector: 'app-shipment-form',
    templateUrl: 'shipment-form.component.html'
})
export class ShipmentFormComponent {
    customsItem: any = {};
    shipment: any = {
        from: {},
        to: {},
        customsInfo: {},
        parcel: {}
    };
    result: any = {};

    constructor(private http: HttpClient, private easyPostService: EasyPostService) {
    }

    createAddress(address, saveToField: string) {
        this.easyPostService.createAddress(address)
            .subscribe(
                result => {
                    console.log(result);
                }
            );
    }

    createCustomsItem(customsItem, saveToField: string) {
        this.easyPostService.createCustomsItem(customsItem)
            .subscribe(
                result => {
                    console.log(result);
                }
            );
    }

    createCustomsInfo() {
        this.easyPostService.createCustomsInfo(this.shipment.customsInfo, [this.customsItem])
            .subscribe(
                result => {
                    console.log(result);
                }
            );
    }

    createParcel() {
        this.easyPostService.createParcel(this.shipment.parcel)
            .subscribe(
                result => {
                    console.log(result);
                }
            );
    }

    createShipment() {
        this.shipment.customsItems = [this.customsItem];
        this.easyPostService.createShipment(this.shipment)
            .subscribe(
                result => {
                    console.log(result);
                    this.result.content = JSON.stringify(result);
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
