import { Pipe, PipeTransform } from '@angular/core';

import { Thing } from '../interfaces';

@Pipe({
  name: 'getMarkerColor',
})
export class GetMarkerColorPipe implements PipeTransform {
  getThing(id: number, things: Thing[]): Thing {
    return things.filter(thing => thing.id === id)[0];
  }

  getConnectedTo(id: number, things: Thing[]): Thing[] {
    return things.filter(thing => thing.joinedWith === id);
  }

  transform(id: number, things: Thing[]): string {
    let openThings = 0;
    const connectedThings = this.getConnectedTo(id, things);
    const connectedThingsLength = connectedThings.length + 1;

    connectedThings.map(thing => thing.status === 'open' && openThings++);
    if (this.getThing(id, things).status === 'open') openThings++;

    if (openThings === connectedThingsLength) return '#f4e700';
    if (openThings === 0) return '#f64d25';
    else return '#ff9800';
  }
}
