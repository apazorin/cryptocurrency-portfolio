import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListComponent } from './coins/pages/list/list.component';
import { CoinsComponent } from './coins/pages/coins/coins.component';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    CoinsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
