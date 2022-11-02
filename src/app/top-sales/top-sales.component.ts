import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-sales',
  templateUrl: './top-sales.component.html',
  styleUrls: ['./top-sales.component.css']
})
export class TopSalesComponent {
  
  @Input() game: Games[] = [];

  @Input() jogo: Games =  {};

  GetListValues(){
    return Object.keys(this.game)
  }
}

interface Games{
  type?: string;
  name?: string;
  genre?: Genre[];
  initialPrice?: number;
  discount_Percentage?: number;
  finalPrice?: number;
  screenshotPath?: string;
}

enum Genre{
  Fps = 'Fps',
  MundoAberto = 'Mundo aberto'
}
