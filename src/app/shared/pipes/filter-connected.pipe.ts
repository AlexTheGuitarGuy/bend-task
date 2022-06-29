import { Pipe, PipeTransform } from '@angular/core';

import { Thing } from '../interfaces';

@Pipe({
  name: 'filterConnected',
})
export class FilterConnectedPipe implements PipeTransform {
  transform(things: Thing[]): Thing[] {
    return things.filter(thing => !thing.joinedWith);
  }
}
