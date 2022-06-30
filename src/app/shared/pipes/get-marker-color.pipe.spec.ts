import { GetMarkerColorPipe } from './get-marker-color.pipe';
import { Thing } from '../interfaces';

describe('GetMarkerColorPipe', () => {
  const pipe = new GetMarkerColorPipe();

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should return yellow if all of the connected things have status open', () => {
    const param: Thing[] = [
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
        status: 'open',
        countActive: 0,
      },
      {
        id: 3000,
        areaId: 1791,
        joinedWith: 2300,
        sku: '5',
        defaultSku: '5',
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
    ];

    const res = pipe.transform(2861, param);

    expect(res).toBe('#f4e700');
  });

  it('should return orange if one or more, but not all are closed', () => {
    const param: Thing[] = [
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
    ];

    const res = pipe.transform(2861, param);

    expect(res).toBe('#ff9800');
  });

  it('should return red if all are closed', () => {
    const param: Thing[] = [
      {
        id: 2861,
        areaId: 1791,
        joinedWith: null,
        sku: '3',
        defaultSku: '3',
        status: 'closed',
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
        status: 'closed',
        countActive: 1,
      },
    ];

    const res = pipe.transform(2861, param);

    expect(res).toBe('#f64d25');
  });
});
