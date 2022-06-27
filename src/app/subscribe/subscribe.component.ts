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

  getThing(id: number): Thing {
    return this.things.filter(thing => thing.id === id)[0];
  }

  getConnectedThings(id: number): Thing[] {
    return this.things.filter(thing => thing.joinedWith === id);
  }

  getMarkerColor(id: number): string {
    let openThings = 0;
    const connectedThings = this.getConnectedThings(id);
    const connectedThingsLength = connectedThings.length + 1;

    this.getConnectedThings(id).map(
      thing => thing.status === 'open' && openThings++
    );
    if (this.getThing(id).status === 'open') openThings++;

    if (openThings === connectedThingsLength) return '#f4e700';
    if (openThings === 0) return '#f64d25';
    else return '#ff9800';
  }

  ngOnDestroy() {
    if (this.areasSub) this.areasSub.unsubscribe();
    if (this.thingsSub) this.thingsSub.unsubscribe();
  }
}
