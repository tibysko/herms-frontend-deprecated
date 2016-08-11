import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { Pin } from '../model/pin';


@Injectable()
export class PinService{
    private backendUrl = 'app/pins';

    constructor(private http: Http){ }

    getPins() {
        return this.http.get(this.backendUrl)
            .toPromise()
            .then(response => response.json().data as Pin[]);
    }
}