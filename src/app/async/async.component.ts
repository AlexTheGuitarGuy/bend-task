import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Area, Thing } from '../shared/interfaces';
import { Observable } from 'rxjs';
import { DataService } from '../shared/services/data.service';

@Component({
  selector: 'app-async',
  templateUrl: './async.component.html',
  styleUrls: ['./async.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AsyncComponent implements OnInit {
  areas$!: Observable<Area[]>;
  things$!: Observable<Thing[]>;

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.areas$ = this.dataService.getAreas();

    this.things$ = this.dataService.getThings();
  }
}
