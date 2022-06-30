import { GetConnectedToPipe } from './get-connected-to.pipe';
import { Thing } from '../interfaces';

describe('GetConnectedToPipe', () => {
  const pipe = new GetConnectedToPipe();

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should return array of objects that are joined with the same object', () => {
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

    expect(res.length).toBe(2);
  });

  it('should return empty array if none of the objects are joined', () => {
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
    ];

    const res = pipe.transform(42, param);

    expect(res.length).toBe(0);
  });

  it('should return empty array if none of the objects are joined to the specified object', () => {
    const param: Thing[] = [
      {
        id: 2861,
        areaId: 1791,
        joinedWith: 63,
        sku: '3',
        defaultSku: '3',
        status: 'open',
        countActive: 0,
      },
    ];

    const res = pipe.transform(42, param);

    expect(res.length).toBe(0);
  });
});
