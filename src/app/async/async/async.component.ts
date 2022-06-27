import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-async',
  templateUrl: './async.component.html',
  styleUrls: ['./async.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AsyncComponent {}
