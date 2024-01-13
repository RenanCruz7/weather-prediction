import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { WeatherserviceService } from 'src/app/services/weatherservice.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  city!: string;
  weatherData: any;

constructor(private weatherService: WeatherserviceService){}

ngOnInit(){}

pesquisa() {
  console.log(this.city)
  this.weatherService.consultaTempo(this.city)
  .subscribe(data => {
    this.weatherData = data;
  })
  }
}
