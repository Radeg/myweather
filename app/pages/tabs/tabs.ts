import {Component} from '@angular/core';
import {WeatherPage} from '../weather/weather';
import {SettingsPage} from '../settings/settings';

@Component({
  templateUrl: 'build/pages/tabs/tabs.html'
})
export class TabsPage {

  private weatherRoot: any;
  private settingsRoot: any;

  constructor() {
    // this tells the tabs component which Pages
    // should be each tab's root Page
    this.weatherRoot = WeatherPage;
    this.settingsRoot = SettingsPage;
  }
}
