import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatCardModule  } from '@angular/material/card';
import { MatGridListModule  } from '@angular/material/grid-list';
import { MatFormFieldModule  } from '@angular/material/form-field';
import { MatInputModule  } from '@angular/material/input';
import { MatSelectModule  } from '@angular/material/select';
import {MatButtonModule} from '@angular/material/button';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';


import { MatListModule } from '@angular/material/list';
import { MatDividerModule  } from '@angular/material/divider';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { WeatherService } from './services/weather.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [



  BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule ,
    MatCardModule ,
    MatGridListModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatListModule,
    MatDividerModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatProgressSpinnerModule
  ],
  providers: [WeatherService],
  bootstrap: [AppComponent]
})
export class AppModule { }
