import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Area, Thing } from '../interfaces';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private http: HttpClient) {}

  getThings(): Observable<Thing[]> {
    return this.http.get<Thing[]>('assets/data/things.json');
  }
  getAreas(): Observable<Area[]> {
    return this.http.get<Area[]>('assets/data/areas.json');
  }
}
