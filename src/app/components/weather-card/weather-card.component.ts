import { Component, Input } from '@angular/core';
import { City } from 'src/app/interfaces/city';

@Component({
  selector: 'app-weather-card',
  templateUrl: './weather-card.component.html',
  styleUrls: ['./weather-card.component.css']
})
export class WeatherCardComponent {
  @Input() weatherData: City | undefined;

  getWeatherIconPath(): string {
    if (this.weatherData && this.weatherData.main) {
      const weatherMain = this.weatherData.main.toLowerCase();
      switch (weatherMain) {
        case 'clear':
          return "/assets/images/clear.png";
        case 'clouds':
          return '/assets/images/clouds.png';
        case 'drizzle':
          return '/assets/images/drizzle.png';
        case 'mist':
          return '/assets/images/mist.png';
        case 'snow':
          return '/assets/images/snow.png';
        case 'rain':
          return '/assets/images/rain.png';
        default:
          return '/assets/images/default.png';
      }
    }
    return '/assets/images/default.png';
  }
}
