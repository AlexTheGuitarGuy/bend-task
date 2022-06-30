import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { of } from 'rxjs';

import { SubscribeComponent } from './subscribe.component';
import { DataService } from '../shared/services/data.service';
import { Area, Thing } from '../shared/interfaces';

describe('SubscribeComponent', () => {
  let component: SubscribeComponent;
  let fixture: ComponentFixture<SubscribeComponent>;
  let dataService: DataService;
  let things: Thing[];
  let areas: Area[];

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [SubscribeComponent],
      providers: [DataService],
    });

    things = [
      {
        id: 2861,
        areaId: 1791,
        joinedWith: null,
        sku: '3',
        defaultSku: '3',
        status: 'open',
        countActive: 0,
      },
      {
        id: 2967,
        areaId: 1791,
        joinedWith: 2861,
        sku: '1',
        defaultSku: '1',
        status: 'closed',
        countActive: 0,
      },
    ];
    areas = [
      {
        areaId: 1791,
        name: 'Zona 1',
      },
      {
        areaId: 1892,
        name: 'Zona 2',
      },
    ];

    fixture = TestBed.createComponent(SubscribeComponent);
    component = fixture.componentInstance;
    dataService = TestBed.inject(DataService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set things and things sub to service OnInit', () => {
    spyOn(dataService, 'getThings').and.returnValue(of(things));
    component.ngOnInit();

    expect(component.things).toEqual(things);
    expect(component.thingsSub).toBeTruthy();
  });

  it('should set areas and areas sub to service OnInit', () => {
    spyOn(dataService, 'getAreas').and.returnValue(of(areas));
    component.ngOnInit();

    expect(component.areas).toEqual(areas);
    expect(component.areasSub).toBeTruthy();
  });
});
