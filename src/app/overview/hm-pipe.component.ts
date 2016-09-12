import { Component, Input, OnInit} from '@angular/core';
import { Pipe } from '../model/pipe.interface';

@Component({
    selector: '[hm-pipe]',
    template: `
        <svg:line [attr.x1]="pipe.startX" [attr.y1]="pipe.startY" [attr.x2]="pipe.endX" [attr.y2]="pipe.endY" style="stroke:rgba(0,0,0,1)" />
    `
})

export class PipeComponent { 
    @Input()
    pipe: Pipe;
}
