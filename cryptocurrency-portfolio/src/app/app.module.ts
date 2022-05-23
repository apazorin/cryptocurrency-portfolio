import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListComponent } from './coins/pages/list/list.component';
import { HttpClientModule } from '@angular/common/http';
import { SidenavComponent } from './shared/sidenav/sidenav.component';
import { ListComponent } from './wallet/pages/list/list.component';
import { WalletComponent } from './wallet/pages/wallet/wallet.component'


@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    ListComponent,
    WalletComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
