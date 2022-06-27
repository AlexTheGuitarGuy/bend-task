import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainLayoutComponent implements OnInit {
  constructor(private router: Router) {}

  otherModule = '';

  ngOnInit() {
    if (this.router.url.includes('subscribe')) this.otherModule = 'async';
    else this.otherModule = 'subscribe';
  }

  switchRoute() {
    this.router.navigate([this.otherModule]).then(() => {
      if (this.router.url.includes('subscribe')) this.otherModule = 'async';
      else this.otherModule = 'subscribe';
    });
  }
}
