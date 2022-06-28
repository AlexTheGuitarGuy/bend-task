import { Pipe, PipeTransform } from '@angular/core';
import { Thing } from '../interfaces';

@Pipe({
  name: 'getConnectedTo',
})
export class GetConnectedToPipe implements PipeTransform {
  transform(id: number, things: Thing[]): Thing[] {
    return things.filter(thing => thing.joinedWith === id);
  }
}
