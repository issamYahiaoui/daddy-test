import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {


  weatherApiUrl = 'http://api.openweathermap.org/data/2.5/weather' ;
  weatherApiKey = 'eb0635f0427fe32015c98d09f51fc6af'

  constructor(private http : HttpClient) { 
    console.log('Weather service is wired !')
  }


  getWeather=(city,type)=>{
    let url = this.weatherApiUrl+ '?q=' +city + '&appid=' + this.weatherApiKey
    console.log('request url', url)
    return this.http.get(url)
               
  }
}
