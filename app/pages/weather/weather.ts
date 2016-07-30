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

  constructor(private weatherService: WeatherService, private navCtrl: NavController, private city: string, private state: string, private weather: string, private searchStr: string, private results: Array<any>, private zmw: string) {
    this.weatherService = weatherService;
    this.weather;
    this.searchStr;
    this.results;
  }

  ngOnInit() {
    this.getDefaultCity();
    this.weatherService.getWeather(this.zmw)
      .subscribe(weather => {
        this.weather = weather.current_observation;
      });
  }

  getQuery() {
    this.weatherService.searchCities(this.searchStr)
      .subscribe(res => {
        this.results = res.RESULTS
      });
  }

  chooseCity(city) {
    this.results = [];
    this.weatherService.getWeather(city.zmw)
      .subscribe(weather => {
        this.weather = weather.current_observation;
      });
  }

  getDefaultCity() {
    if(localStorage.city !== undefined) {
      this.zmw = JSON.parse(localStorage.city).zmw;
    } else {
      this.zmw = '02101.1.99999';
    }
  }
}
