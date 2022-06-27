import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AsyncComponent } from './async.component';

const routes: Routes = [
  {
    path: '',
    component: AsyncComponent,
  },
];

@NgModule({
  declarations: [AsyncComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AsyncModule {}
