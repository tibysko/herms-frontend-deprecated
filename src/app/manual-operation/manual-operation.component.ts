import { Component, OnInit } from '@angular/core';

import { PinService } from './pin.service';
import { Pin } from '../model/pin';

@Component({
    selector: 'manual-operation',
    templateUrl: 'manual-operation.component.html'
})

export class ManualOperationComponent implements OnInit {
    pins: Pin[] = [];
    
    constructor(
        private pinService : PinService
    ){ }

    ngOnInit(){
        this.pinService.getPins().then(pins => this.pins = pins);
    }

    operationOn(pin: Pin){
        console.log(JSON.stringify(pin));
    }

    operationOff(pin: Pin){
        console.log(JSON.stringify(pin));
    }

    operationRead(pin: Pin){
        console.log(JSON.stringify(pin));
    }
}