import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-releases',
  templateUrl: './releases.component.html',
  styleUrls: ['./releases.component.css']
})
export class ReleasesComponent {

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
