import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Area, Thing } from '../interfaces';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  thingsAddress = 'assets/data/things.json';
  areasAddress = 'assets/data/areas.json';

  constructor(private http: HttpClient) {}

  getThings(): Observable<Thing[]> {
    return this.http.get<Thing[]>(this.thingsAddress);
  }
  getAreas(): Observable<Area[]> {
    return this.http.get<Area[]>(this.areasAddress);
  }
}
