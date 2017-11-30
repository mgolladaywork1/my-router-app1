import 'rxjs/add/operator/scan';
import 'rxjs/add/operator/first';
import 'rxjs/add/operator/zip';
import 'rxjs/add/operator/skip';

import { Injectable } from '@angular/core';
import { BehaviorSubject }  from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { of } from "rxjs/observable/of";

export type Discharge = { id: number; description: string; };

@Injectable()
export class DischargeDesc {
  dischargeDescriptions: Discharge[] = [
    { id: 0, description: 'Routine discharge home' }
  ]

}

