import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-game-card',
  templateUrl: './game-card.component.html',
  styleUrls: ['./game-card.component.css']
})
export class GameCardComponent {
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
