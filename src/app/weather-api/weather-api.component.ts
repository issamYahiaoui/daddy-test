import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../services/weather.service';

@Component({
  selector: 'app-weather-api',
  templateUrl: './weather-api.component.html',
  styleUrls: ['./weather-api.component.scss']
})
export class WeatherApiComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log('Weather Api Component is wired !')
  }

}
