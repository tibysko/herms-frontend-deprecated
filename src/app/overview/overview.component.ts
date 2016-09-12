import { Component, OnInit, OnDestroy } from '@angular/core';

import {PinNotificationService} from '../core/pin-notification.service';
import {Pin} from '../model/pin.interface';
import {ValveComponent} from './hm-valve.component';
import {PipeComponent} from './hm-pipe.component';
import {Valve} from '../model/valve';
import {Pipe} from '../model/pipe.interface';

@Component({
    selector: 'overview',
    templateUrl: 'overview.component.html',
    providers: [PinNotificationService],
    directives: [ValveComponent, PipeComponent]
})

export class OverviewComponent implements OnInit, OnDestroy {
    private connection: any;
    mltWortIn: Valve = new Valve();
    mltHwIn: Valve = new Valve();        
    ketRecirc: Valve = new Valve();
    autoSparage: Valve = new Valve();
    mltWortOut: Valve = new Valve();
    heHwOut: Valve = new Valve();
    heCwOut: Valve = new Valve();
    heCwIn: Valve = new Valve();
    heHwIn: Valve = new Valve();
    ketWortIn: Valve = new Valve();
    mltKetByPass: Valve = new Valve();
    ketWortOut: Valve = new Valve(); 

    static COLOR_BLACK: String = `rgba(0, 0, 0,1)`;
    static COLOR_GREEN: String = `rgba(0, 255, 0,1)`;
    static COLOR_RED: String = `rgba(255, 0, 0,1)`;

    constructor(private pinNotificationService: PinNotificationService) {
        this.mltWortIn.color = OverviewComponent.COLOR_RED;
        this.mltHwIn.color = OverviewComponent.COLOR_RED;
        this.ketRecirc.color = OverviewComponent.COLOR_RED;
        this.autoSparage.color = OverviewComponent.COLOR_RED;
        this.mltWortOut.color = OverviewComponent.COLOR_RED;
        this.heHwOut.color = OverviewComponent.COLOR_RED;
        this.heCwOut.color = OverviewComponent.COLOR_RED;
        this.heCwIn.color = OverviewComponent.COLOR_RED;                      
        this.heHwIn.color = OverviewComponent.COLOR_RED;
        this.ketWortIn.color = OverviewComponent.COLOR_RED;
        this.mltKetByPass.color = OverviewComponent.COLOR_RED;
        this.ketWortOut.color = OverviewComponent.COLOR_RED;


    }

    private updateValves(pins: Map<String, Pin>){

    }

    ngOnInit() {
        this.connection = this.pinNotificationService.getPins().subscribe((pins: Map<String, Pin>) => {
            this.updateValves(pins);            
        });
    }

    ngOnDestroy() {
        this.connection.unsubscribe();
    }
}
