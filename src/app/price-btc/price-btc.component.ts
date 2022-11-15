import { Component, OnInit } from '@angular/core';
import { BitcoinService } from '../bitcoin.service';

@Component({
  selector: 'app-price-btc',
  templateUrl: './price-btc.component.html',
  styleUrls: ['./price-btc.component.css'],
})
export class PriceBtcComponent implements OnInit {
  constructor(public bitcoinService: BitcoinService) {}

  ngOnInit() {
    this.update();
  }

  getCurrentPrice() {
    return this.bitcoinService.currentPrice;
  }

  update() {
    this.bitcoinService.update();
  }
}
