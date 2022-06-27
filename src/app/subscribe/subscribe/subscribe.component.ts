import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-subscribe',
  templateUrl: './subscribe.component.html',
  styleUrls: ['./subscribe.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SubscribeComponent {}
