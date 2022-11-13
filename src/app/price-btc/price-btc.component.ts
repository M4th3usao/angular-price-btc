import { Component, OnInit } from '@angular/core';
import { BitcoinService } from '../bitcoin.service';

@Component({
  selector: 'app-price-btc',
  templateUrl: './price-btc.component.html',
  styleUrls: ['./price-btc.component.css'],
})
export class PriceBtcComponent implements OnInit {
  constructor(public bitcoinService: BitcoinService) {}

  // ws = new WebSocket('wss://stream.binance.com:9443/ws/btc@trade');
  // stockPriceElement = document.getElementById('stock-price');
  // lastPrice = null;

  ngOnInit() {
    this.update();
  }

  getCurrentPrice() {
    return this.bitcoinService.currentPrice;
  }

  update() {
    this.bitcoinService.update();
  }

  // onmessage = (event) => {
  //   let stockObject = JSON.parse(event.data);
  //   let price = parseFloat(stockObject.p).toFixed(2);
  //   this.stockPriceElement.innerText = price;
  //   this.stockPriceElement.style.color = !this.lastPrice || this.lastPrice === price ? 'black' : price > this.lastPrice ? 'green' : 'red';
  //   this.lastPrice = price;
  // }
}
