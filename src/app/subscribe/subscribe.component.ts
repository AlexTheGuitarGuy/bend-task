import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { Thing } from 'src/app/shared/interfaces';
import { Area } from 'src/app/shared/interfaces';
import { DataService } from '../shared/services/data.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-subscribe',
  templateUrl: './subscribe.component.html',
  styleUrls: ['./subscribe.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SubscribeComponent implements OnInit, OnDestroy {
  areas!: Area[];
  areasSub!: Subscription;
  things!: Thing[];
  thingsSub!: Subscription;

  constructor(
    private dataService: DataService,
    private readonly cdRef: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.areasSub = this.dataService.getAreas().subscribe(areas => {
      this.areas = areas;
      this.cdRef.detectChanges();
    });

    this.thingsSub = this.dataService.getThings().subscribe(things => {
      this.things = things;
      this.cdRef.detectChanges();
    });
  }

  ngOnDestroy() {
    if (this.areasSub) this.areasSub.unsubscribe();
    if (this.thingsSub) this.thingsSub.unsubscribe();
  }
}
