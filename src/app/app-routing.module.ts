import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WeatherApiComponent } from './weather-api/weather-api.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  {
    path : '/',
    redirectTo : 'weather-api',
    component : AppComponent , 
  } ,
  {
    path : 'weather-api/',
    component : WeatherApiComponent , 
  } 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
 

exports: [RouterModule]
})
export class AppRoutingModule { }
