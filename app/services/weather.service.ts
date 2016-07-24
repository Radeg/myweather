import {Injectable, Inject} from '@angular/core';
import {Http} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';

@Injectable()
export class WeatherService {
    static get parameters() {
        return [Http];
    }

    constructor(private http: Http ,private weatherService: WeatherService, private apiKey: string, private conditionsUrl: string) {
    this.weatherService = weatherService;
    this.apiKey = '76f06384e15c7510';
    this.conditionsUrl = 'https://api.wunderground.com/api/' + this.apiKey + '/conditions/q';
  }

  getWeather(city, state) {
    return this.http.get(this.conditionsUrl + '/' + state + '/' + city + '.json')
      .map(res => res.json());
  }
}