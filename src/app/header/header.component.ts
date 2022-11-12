import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  name: string = 'Matheus Henrique Cruz de Oliveira';
  RA: string = '0050832021009';

  constructor() {}

  ngOnInit() {}
}
