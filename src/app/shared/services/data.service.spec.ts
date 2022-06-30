import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';

import { DataService } from './data.service';
import { Area, Thing } from '../interfaces';

describe('DataService', () => {
  let service: DataService;
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [DataService],
    });

    httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);
    service = TestBed.inject(DataService);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('#getThings', () => {
    let expectedThings: Thing[];

    beforeEach(() => {
      service = TestBed.inject(DataService);
      expectedThings = [
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
        {
          id: 2969,
          areaId: 1791,
          joinedWith: 2861,
          sku: '4',
          defaultSku: '4',
          status: 'open',
          countActive: 1,
        },
      ] as Thing[];
    });

    it('should return expected things (called once)', () => {
      service.getThings().subscribe({
        next: things =>
          expect(things)
            .withContext('should return expected things')
            .toEqual(expectedThings),
        error: fail,
      });

      const req = httpTestingController.expectOne(service.thingsAddress);
      expect(req.request.method).toEqual('GET');

      req.flush(expectedThings);
    });

    it('should be OK returning no things', () => {
      service.getThings().subscribe({
        next: things =>
          expect(things.length)
            .withContext('should have empty things array')
            .toEqual(0),
        error: fail,
      });

      const req = httpTestingController.expectOne(service.thingsAddress);
      req.flush([]);
    });

    it('should return expected things (called multiple times)', () => {
      service.getThings().subscribe();
      service.getThings().subscribe();
      service.getThings().subscribe({
        next: things =>
          expect(things)
            .withContext('should return expected things')
            .toEqual(expectedThings),
        error: fail,
      });

      const requests = httpTestingController.match(service.thingsAddress);
      expect(requests.length).withContext('calls to getThings()').toEqual(3);

      requests[0].flush([]);
      requests[1].flush([
        {
          id: 2861,
          areaId: 1791,
          joinedWith: null,
          sku: '3',
          defaultSku: '3',
          status: 'open',
          countActive: 0,
        },
      ]);
      requests[2].flush(expectedThings);
    });
  });

  describe('#getAreas', () => {
    let expectedAreas: Area[];

    beforeEach(() => {
      service = TestBed.inject(DataService);
      expectedAreas = [
        {
          areaId: 1791,
          name: 'Zona 1',
        },
        {
          areaId: 1892,
          name: 'Zona 2',
        },
        {
          areaId: 1900,
          name: 'Zona 4',
        },
      ] as Area[];
    });

    it('should return expected areas (called once)', () => {
      service.getAreas().subscribe({
        next: areas =>
          expect(areas)
            .withContext('should return expected areas')
            .toEqual(expectedAreas),
        error: fail,
      });

      const req = httpTestingController.expectOne(service.areasAddress);
      expect(req.request.method).toEqual('GET');

      req.flush(expectedAreas);
    });

    it('should be OK returning no things', () => {
      service.getAreas().subscribe({
        next: areas =>
          expect(areas.length)
            .withContext('should have empty areas array')
            .toEqual(0),
        error: fail,
      });

      const req = httpTestingController.expectOne(service.areasAddress);
      req.flush([]);
    });

    it('should return expected areas (called multiple times)', () => {
      service.getAreas().subscribe();
      service.getAreas().subscribe();
      service.getAreas().subscribe({
        next: areas =>
          expect(areas)
            .withContext('should return expected areas')
            .toEqual(expectedAreas),
        error: fail,
      });

      const requests = httpTestingController.match(service.areasAddress);
      expect(requests.length).withContext('calls to getAreas()').toEqual(3);

      requests[0].flush([]);
      requests[1].flush([
        {
          areaId: 1791,
          name: 'Zona 1',
        },
      ]);
      requests[2].flush(expectedAreas);
    });
  });
});
