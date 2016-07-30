import {Component, OnInit} from '@angular/core';
import {NavController} from 'ionic-angular';
import {WeatherService} from '../../services/weather.service';
import {WeatherPage} from '../weather/weather';

@Component({
  templateUrl: 'build/pages/settings/settings.html',
  providers: [WeatherService]
})

export class SettingsPage {

  static get parameters() {
    return [[WeatherService], [NavController]];
  }
  
  constructor(private weatherService: WeatherService, private navCtrl: NavController, private searchStr: string, private defaultCity: string, private results: Array<any>) {
    this.navCtrl;
    this.weatherService = weatherService;
    this.searchStr;
    this.defaultCity;
    this.results = [];
  }

  ngOnInit() {
    this.getDefaultCity();
  }

  getQuery() {
    this.weatherService.searchCities(this.searchStr)
      .subscribe(res => {
        this.results = res.RESULTS
      });
  }

  getDefaultCity() {
    if(localStorage.city !== undefined) {
      this.defaultCity = JSON.parse(localStorage.city).name;
    } else {
      this.defaultCity = '';
    }
  }

  setDefaultCity(city) {
    this.results = [];

    if(typeof(Storage) !== 'undefined') {
      localStorage.city = JSON.stringify(city);
      this.searchStr = city.name;
      this.getDefaultCity();
    } else {
      console.log('LocalStorage not supported')
    }
  }

  saveChanges() {
    this.navCtrl.setRoot(WeatherPage);
  }
}
