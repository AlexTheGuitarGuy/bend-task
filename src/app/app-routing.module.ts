import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainLayoutComponent } from './shared/components/main-layout/main-layout.component';

const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      { path: '', redirectTo: '/subscribe', pathMatch: 'full' },
      {
        path: 'subscribe',
        loadChildren: () =>
          import('./subscribe/subscribe.module').then(m => m.SubscribeModule),
      },
      {
        path: 'async',
        loadChildren: () =>
          import('./async/async.module').then(m => m.AsyncModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
