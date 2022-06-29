import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { Area, Thing } from '../../interfaces';

@Component({
  selector: 'app-interface',
  templateUrl: './interface.component.html',
  styleUrls: ['./interface.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InterfaceComponent {
  @Input() areas!: Area[];
  @Input() things!: Thing[];
}
