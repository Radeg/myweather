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

  constructor(private weatherService: WeatherService, private navCtrl: NavController, private city: string, private state: string) {
    this.weatherService = weatherService;
    this.city = 'Boston';
    this.state = 'MA';
  }

  ngOnInit() {
    this.weatherService.getWeather(this.city, this.state)
      .subscribe(weather => {
        console.log(weather);
      })
  }
}
