import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EasyPostService } from '../shared/easy-post.service';

@Component({
    selector: 'app-shipment-form',
    templateUrl: 'shipment-form.component.html'
})
export class ShipmentFormComponent {
    displayedColumns = ['carrier', 'service', 'rate', 'currency', 'retail_rate', 'retail_currency', 'list_rate', 'list_currency'];

    customsItem: any = {
        origin_country: 'US',
    };

    customsInfo: any = {
        eel_pfc: 'NOEEI 30.37(a)',
        non_delivery_option: 'return'
    };

    shipment: any = {
        fromAddress: {
            company: null,
            street1: '417 Montgomery Street',
            street2: '5th Floor',
            city: 'San Francisco',
            state: 'CA',
            zip: '94104',
            country: 'US',
            phone: '4153334444',
        },
        toAddress: {
            company: null,
            street1: '179 N Harbor Dr',
            street2: null,
            city: 'Redondo Beach',
            state: 'CA',
            zip: '90277',
            country: 'US',
            phone: '4153334444',
        },
        parcel: {},
        isInternational: false
    };
    result: any = {};

    countries: string[] = ['BD', 'BE', 'BF', 'BG', 'BA', 'BB', 'WF', 'BL', 'BM', 'BN', 'BO',
        'BH', 'BI', 'BJ', 'BT', 'JM', 'BV', 'BW', 'WS', 'BQ', 'BR', 'BS', 'JE', 'BY', 'BZ', 'RU',
        'RW', 'RS', 'TL', 'RE', 'TM', 'TJ', 'RO', 'TK', 'GW', 'GU', 'GT', 'GS', 'GR', 'GQ', 'GP',
        'JP', 'GY', 'GG', 'GF', 'GE', 'GD', 'GB', 'GA', 'SV', 'GN', 'GM', 'GL', 'GI', 'GH', 'OM',
        'TN', 'JO', 'HR', 'HT', 'HU', 'HK', 'HN', 'HM', 'VE', 'PR', 'PS', 'PW', 'PT', 'SJ', 'PY',
        'IQ', 'PA', 'PF', 'PG', 'PE', 'PK', 'PH', 'PN', 'PL', 'PM', 'ZM', 'EH', 'EE', 'EG', 'ZA',
        'EC', 'IT', 'VN', 'SB', 'ET', 'SO', 'ZW', 'SA', 'ES', 'ER', 'ME', 'MD', 'MG', 'MF', 'MA',
        'MC', 'UZ', 'MM', 'ML', 'MO', 'MN', 'MH', 'MK', 'MU', 'MT', 'MW', 'MV', 'MQ', 'MP', 'MS',
        'MR', 'IM', 'UG', 'TZ', 'MY', 'MX', 'IL', 'FR', 'IO', 'SH', 'FI', 'FJ', 'FK', 'FM', 'FO',
        'NI', 'NL', 'NO', 'NA', 'VU', 'NC', 'NE', 'NF', 'NG', 'NZ', 'NP', 'NR', 'NU', 'CK', 'XK',
        'CI', 'CH', 'CO', 'CN', 'CM', 'CL', 'CC', 'CA', 'CG', 'CF', 'CD', 'CZ', 'CY', 'CX', 'CR',
        'CW', 'CV', 'CU', 'SZ', 'SY', 'SX', 'KG', 'KE', 'SS', 'SR', 'KI', 'KH', 'KN', 'KM', 'ST',
        'SK', 'KR', 'SI', 'KP', 'KW', 'SN', 'SM', 'SL', 'SC', 'KZ', 'KY', 'SG', 'SE', 'SD', 'DO',
        'DM', 'DJ', 'DK', 'VG', 'DE', 'YE', 'DZ', 'US', 'UY', 'YT', 'UM', 'LB', 'LC', 'LA', 'TV',
        'TW', 'TT', 'TR', 'LK', 'LI', 'LV', 'TO', 'LT', 'LU', 'LR', 'LS', 'TH', 'TF', 'TG', 'TD',
        'TC', 'LY', 'VA', 'VC', 'AE', 'AD', 'AG', 'AF', 'AI', 'VI', 'IS', 'IR', 'AM', 'AL', 'AO',
        'AQ', 'AS', 'AR', 'AU', 'AT', 'AW', 'IN', 'AX', 'AZ', 'IE', 'ID', 'UA', 'QA', 'MZ'];

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
        if (this.shipment.isInternational) {
            this.shipment.customsItems = [this.customsItem];
            this.shipment.customsInfo = this.customsInfo;
        } else {
            this.shipment.customsItems = null;
            this.shipment.customsInfo = null;
        }
        this.easyPostService.createShipment(this.shipment)
            .subscribe(
                result => {
                    console.log(result);
                    this.result = result;
                }
            );
    }

    regenerateRates() {
        this.easyPostService.regenerateRates(this.result.id)
            .subscribe(
                result => {
                    console.log(result);
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
