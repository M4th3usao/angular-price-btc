import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HeaderComponent } from './header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { PriceBtcComponent } from './price-btc/price-btc.component';
import { BitcoinService } from './bitcoin.service';
import { TimerComponent } from './timer/timer.component';
import { TimerService } from '../services/timer.service';

@NgModule({
  imports: [BrowserModule, FormsModule, HttpClientModule],
  declarations: [
    AppComponent,
    HelloComponent,
    HeaderComponent,
    PriceBtcComponent,
    TimerComponent,
  ],
  bootstrap: [AppComponent],
  providers: [BitcoinService, TimerService],
})
export class AppModule {}
