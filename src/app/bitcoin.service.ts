import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { intervalProvider } from 'rxjs/internal/scheduler/intervalProvider';

interface Response {
  time: {
    updated: string;
  };
  disclamer: string;
  bpi: {
    [key in 'USD' | 'BRL']: {
      symbol: string;
      description: string;
      rate_float: number;
      rate: string;
    };
  };
}

interface PriceUpdate {
  timestamp: Date;
  USD: number;
  BRL: number;
}
@Injectable()
export class BitcoinService {
  currentPrice: Response;
  lastUpdate: Date;

  updateList: Array<PriceUpdate> = [];
  constructor(private http: HttpClient) {}

  update() {
    this.http
      .get<Response>('https://api.coindesk.com/v1/bpi/currentprice/brl.json')
      .subscribe((data) => {
        this.lastUpdate = new Date();
        this.currentPrice = data;
        this.updateList.push({
          timestamp: this.lastUpdate,
          USD: this.currentPrice.bpi.USD.rate_float,
          BRL: this.currentPrice.bpi.BRL.rate_float,
        });
      });
  }
}
