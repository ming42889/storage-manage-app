import { Component, Input, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EasyPostService } from '../shared/easy-post.service';

@Component({
    selector: 'app-address-form',
    templateUrl: 'address-form.component.html'
})
export class AddressFormComponent {
    @Input() address: any = {};
    @Input() title = '';
    @Output() addressChange = new EventEmitter();

    constructor(private http: HttpClient, private easyPostService: EasyPostService) {
    }


    onModelChange() {
        this.addressChange.emit(this.address);
    }
}
