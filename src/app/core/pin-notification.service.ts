import { Injectable, OnInit } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import * as io from 'socket.io-client';

import {Pin} from '../model/pin.interface';


@Injectable()
export class PinNotificationService {
    private url = 'http://localhost:8080';
    private socket: any;
    private observable: any;

    constructor() { }

    getPins() {
        let observable = new Observable((observer: any) => {
            this.socket = io(this.url);
            this.socket.on('pins', (data: Map<String, Pin>) => {
                observer.next(data);
            });
            return () => {
                this.socket.disconnect();
            };
        });

        return observable;
    }
}