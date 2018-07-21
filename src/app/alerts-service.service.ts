import {Injectable} from '@angular/core';
import {makeStateKey, TransferState} from '@angular/platform-browser';
import {data} from "../../data";
import {of} from "rxjs/observable/of";
import {tap} from "rxjs/operators";

@Injectable()
export class AlertsServiceService {
  KEY_NAME = makeStateKey('foo');

  constructor(private state: TransferState,) {
  }

  getData() {

    let fromState = this.state.get(this.KEY_NAME, null as any);
    console.log(fromState);
    if (fromState) {
      return of(fromState);
    }
    return of(data).pipe(tap((data) => {
      console.log(data);
      this.state.set(this.KEY_NAME, data as any);
    }))


  }

}

