import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-customs-item',
    templateUrl: 'customs-item.component.html'
})
export class CustomsItemComponent {
    @Input() customsItem: any = {};
    @Input() title = '';
    @Output() customsItemChange = new EventEmitter();


    onModelChange() {
        this.customsItemChange.emit(this.customsItem);
    }
}
