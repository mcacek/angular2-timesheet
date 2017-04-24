import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { ExtHttp } from '../core/extHttp.service';
import { TimeUnit } from './TimeUnit';
import { User } from '../core';

@Injectable()
export class TimeUnitService {
  constructor(private http: ExtHttp) {}

  create(user: User, timeUnit: TimeUnit): Observable<any> {
    return Observable.create((observer) => {
      this.http.post(`/users/${user.id}/timesheets/${timeUnit.timesheet_id}/timeunits`, timeUnit).subscribe((response) => {
        observer.next(response.json());
      });
    });
  }

  // add getTimeUnits method that request timeunits for a given user and timesheetId
  // Path: /users/${userId}/timesheets/${timesheetId}
}
