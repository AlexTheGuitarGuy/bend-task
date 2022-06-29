import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { InterfaceComponent } from './components/interface/interface.component';
import { FilterConnectedPipe } from './pipes/filter-connected.pipe';
import { GetConnectedToPipe } from './pipes/get-connected-to.pipe';
import { GetMarkerColorPipe } from './pipes/get-marker-color.pipe';

@NgModule({
  declarations: [
    FilterConnectedPipe,
    GetConnectedToPipe,
    GetMarkerColorPipe,
    InterfaceComponent,
  ],
  imports: [CommonModule],
  exports: [
    FilterConnectedPipe,
    GetConnectedToPipe,
    GetMarkerColorPipe,
    InterfaceComponent,
  ],
})
export class SharedModule {}
