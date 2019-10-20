import { Component } from '@angular/core';
import { WeatherService } from './services/weather.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'angular-test';
  weatherForm: FormGroup;
  submitted = false;
  loading = null ;
  weatherData = {description : '', clouds : '', rain : ''  , name : '' , temp : '' , imageUrl : '' ,weatherStatus : '' }

  today = new Date();

  constructor(
    private weatherService: WeatherService,
    private fb: FormBuilder
  ) {
    this.createForm();
  }

  createForm() {
    this.weatherForm = this.fb.group({
      city: [''],
      type: ['']
    });
  }

  changeType(e) {
    this.weatherForm.get('type').setValue(e.value, {
       onlySelf: true
    })
  }

  public handleError = (controlName: string, errorName: string) => {
    return this.weatherForm.controls[controlName].hasError(errorName);
  }

  onSubmit(city,type) {
    console.log(' city  is : ' + city);
    console.log(' type  is : ' + type);
    this.submitted = true
    if (this.handleError('city', 'required') || this.handleError('type', 'required')  ) return false
    this.loading = true
    this.weatherService
        .getWeather(city,type)
        .subscribe(
          res=>{

            console.log('res',res)
            this.weatherData.name = res['name'] + ',' + res['sys']['country'];
            this.weatherData.temp = res['main'].temp;
            this.weatherData.imageUrl = 'http://openweathermap.org/img/wn/' + res['weather'][0]['icon']+ '@2x.png';
            this.weatherData.weatherStatus = res['weather'][0]['description'];

            this.weatherData.description =  res['weather'][0].description ,
            this.weatherData.clouds = res['clouds'] ? res['clouds']['all'] : 'None',
            this.weatherData.rain = res['rain'] ? res['rain']['1h']  : 'None', 
            this.loading = false
            console.log('my weather', this.weatherData) 
          },
          err=>console.log('err',err)
        )
        
        
        
  }
}
