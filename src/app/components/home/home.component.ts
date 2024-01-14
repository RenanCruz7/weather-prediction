import { Component, Input } from '@angular/core';
import { City } from 'src/app/interfaces/city';
import { WeatherserviceService } from 'src/app/services/weatherservice.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  city!: string;
  weatherData: City | undefined;

  constructor(private weatherService: WeatherserviceService) { }

  pesquisa() {
    console.log(this.city);
    this.weatherService.consultaTempo(this.city)
      .subscribe(
        data => {
          this.weatherData = data;
        }
      );
  }
}
