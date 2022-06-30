import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainLayoutComponent implements OnInit {
  constructor(public router: Router) {}

  otherModule = '';

  ngOnInit() {
    this.otherModule = this.router.url.includes('subscribe')
      ? 'async'
      : 'subscribe';
  }

  switchRoute() {
    this.router.navigate([this.otherModule]).then(() => {
      this.otherModule = this.router.url.includes('subscribe')
        ? 'async'
        : 'subscribe';
    });
  }
}
