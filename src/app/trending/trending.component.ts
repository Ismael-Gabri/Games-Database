import { Component, OnInit } from '@angular/core';
import { SwiperComponent } from "swiper/angular";

// import Swiper core and required modules
import SwiperCore, { Pagination, Navigation } from "swiper";
import { TrendingService } from './trending.service';

// install Swiper modules
SwiperCore.use([Pagination, Navigation]);

@Component({
  selector: 'app-trending',
  templateUrl: './trending.component.html',
  styleUrls: ['./trending.component.css']
})
export class TrendingComponent implements OnInit {

  constructor (private trendingService: TrendingService) {}

  public games: Games[] = [];
  
  ngOnInit() {
    this.GetGames();
  }

  //Linha comentada, se quiser usar essa função pricisa mudar o retorno sem ser observable, pois o observable serve para atribuir o retorna a variaveis
  // GetGamesList(){
  //   this.trendingService.GetGamesList()
  //     .then(games => console.log(games))
  //     .catch(error => console.error(error));
  // }

  GetGames(){
    this.trendingService.GetGamesList().subscribe(games => {
      this.games = games;
      console.log(this.games);
    })
  }

}

interface Games{
  type: string;
  name: string;
  genre: Genre[];
  initialPrice: number;
  discount_Percentage: number;
  finalPrice: number;
  screenshotPath: string;
}

enum Genre{
  Fps = 'Fps',
  MundoAberto = 'Mundo aberto'
}