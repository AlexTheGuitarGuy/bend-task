import {
  ComponentFixture,
  TestBed,
  fakeAsync,
  tick,
} from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

import { MainLayoutComponent } from './main-layout.component';

class RouterStub {
  url = '/subscribe';
  navigate(path: string[]) {
    return new Promise(resolve => {
      this.url = `/${path[0]}`;
      resolve('200');
    });
  }
}

describe('MainLayoutComponent (class only)', () => {
  let component: MainLayoutComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MainLayoutComponent],
      imports: [RouterTestingModule],
      providers: [
        MainLayoutComponent,
        { provide: Router, useClass: RouterStub },
      ],
    });
    component = TestBed.inject(MainLayoutComponent);
  });

  it('should not have otherModule after construction', () => {
    expect(component.otherModule).toBe('');
  });

  it('should assign otherModule after Angular calls ngOnInit', () => {
    component.ngOnInit();

    expect(component.otherModule).toContain('async');
    expect(component.router.url).toContain('subscribe');
  });

  it('should switch otherModule and route after calling switchRoute', fakeAsync(() => {
    component.ngOnInit();
    component.switchRoute();
    tick();

    expect(component.otherModule).toContain('subscribe');
    expect(component.router.url).toContain('async');
  }));
});

describe('MainLayoutComponent', () => {
  let component: MainLayoutComponent;
  let fixture: ComponentFixture<MainLayoutComponent>;
  let el: HTMLElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MainLayoutComponent],
      imports: [RouterTestingModule],
      providers: [
        MainLayoutComponent,
        { provide: Router, useClass: RouterStub },
      ],
    });

    fixture = TestBed.createComponent(MainLayoutComponent);
    component = fixture.componentInstance;
    el = fixture.nativeElement.querySelector('.btn');
    fixture.detectChanges();
  });

  it('should be defined', () => {
    expect(component).toBeDefined();
  });

  it('should show otherModule name on button', () => {
    const content = el.textContent;
    expect(content)
      .withContext(`"... ${component.otherModule} ..."`)
      .toContain(`${component.otherModule}`);
  });
});
