import { FilterConnectedPipe } from './filter-connected.pipe';
import { Thing } from '../interfaces';

describe('FilterConnectedPipe', () => {
  const pipe = new FilterConnectedPipe();

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should return array of objects that have joinedWith property equal to null', () => {
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

    const res = pipe.transform(param);

    expect(res.length).toBe(1);
  });

  it('should return empty array if all of the objects are joined', () => {
    const param: Thing[] = [
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

    const res = pipe.transform(param);

    expect(res.length).toBe(0);
  });
});
