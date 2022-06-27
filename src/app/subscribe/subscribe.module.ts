import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubscribeComponent } from './subscribe.component';
import { RouterModule, Routes } from '@angular/router';
import { FilterConnectedPipe } from '../shared/pipes/filter-connected.pipe';

const routes: Routes = [
  {
    path: '',
    component: SubscribeComponent,
  },
];

@NgModule({
  declarations: [SubscribeComponent, FilterConnectedPipe],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SubscribeModule {}
