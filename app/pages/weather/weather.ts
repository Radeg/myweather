import {Component, OnInit} from '@angular/core';
import {NavController} from 'ionic-angular';
import {WeatherService} from '../../services/weather.service';

@Component({
  templateUrl: 'build/pages/weather/weather.html',
  providers: [WeatherService]
})

export class WeatherPage {
  static get parameters() {
    return [[WeatherService], [NavController]];
  }

  constructor(private weatherService: WeatherService, private navCtrl: NavController, private city: string, private state: string, private weather: string) {
    this.weatherService = weatherService;
    this.city = 'Mlada Boleslav';
    this.state = 'Czech Republic';
    this.weather;
  }

  ngOnInit() {
    this.weatherService.getWeather(this.city, this.state)
      .subscribe(weather => {
        this.weather = weather.current_observation;
      })
  }
}
