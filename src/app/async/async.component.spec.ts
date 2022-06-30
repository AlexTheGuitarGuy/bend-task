import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { of } from 'rxjs';

import { AsyncComponent } from './async.component';
import { DataService } from '../shared/services/data.service';
import { Area, Thing } from '../shared/interfaces';

describe('AsyncComponent', () => {
  let component: AsyncComponent;
  let fixture: ComponentFixture<AsyncComponent>;
  let dataService: DataService;
  let things: Thing[];
  let areas: Area[];

  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [AsyncComponent],
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

    fixture = TestBed.createComponent(AsyncComponent);
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

    component.things$.subscribe(t => {
      expect(t).toBe(things);
    });
  });

  it('should set areas and areas sub to service OnInit', () => {
    spyOn(dataService, 'getAreas').and.returnValue(of(areas));
    component.ngOnInit();

    component.areas$.subscribe(a => {
      expect(a).toBe(areas);
    });
  });
});
