import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_PATH } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TrendingService {

  constructor(private httpClient: HttpClient) { }

  GetGamesList(){
    return this.httpClient.get<Games[]>(`${ API_PATH }v1/games`);
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