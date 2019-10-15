import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherApiComponent } from './weather-api.component';

describe('WeatherApiComponent', () => {
  let component: WeatherApiComponent;
  let fixture: ComponentFixture<WeatherApiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeatherApiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
