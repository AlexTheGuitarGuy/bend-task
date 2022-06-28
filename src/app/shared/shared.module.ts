import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterConnectedPipe } from './pipes/filter-connected.pipe';
import { GetConnectedToPipe } from './pipes/get-connected-to.pipe';
import { GetMarkerColorPipe } from './pipes/get-marker-color.pipe';

@NgModule({
  declarations: [FilterConnectedPipe, GetConnectedToPipe, GetMarkerColorPipe],
  imports: [CommonModule],
  exports: [FilterConnectedPipe, GetConnectedToPipe, GetMarkerColorPipe],
})
export class SharedModule {}
