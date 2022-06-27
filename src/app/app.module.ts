import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { MainLayoutComponent } from './shared/components/main-layout/main-layout.component';

@NgModule({
  declarations: [AppComponent, MainLayoutComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
  exports: [],
})
export class AppModule {}
