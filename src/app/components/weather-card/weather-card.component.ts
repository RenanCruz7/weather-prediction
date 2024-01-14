import { Component, Input } from '@angular/core';
import { WeatherserviceService } from './../../services/weatherservice.service';
import { City } from 'src/app/interfaces/city';

@Component({
  selector: 'app-weather-card',
  templateUrl: './weather-card.component.html',
  styleUrls: ['./weather-card.component.css']
})
export class WeatherCardComponent {
  @Input() weatherData: City | undefined

}
