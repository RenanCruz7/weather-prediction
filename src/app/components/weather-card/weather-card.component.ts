import { Component, Input } from '@angular/core';
import { WeatherserviceService } from './../../services/weatherservice.service';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-weather-card',
  templateUrl: './weather-card.component.html',
  styleUrls: ['./weather-card.component.css']
})
export class WeatherCardComponent {
  @Input() city: string = ""
  weatherData: any;

  constructor(private  weatherService:WeatherserviceService){}

pesquisaCidade(form: NgForm){
  //this.weatherService.consultaTempo(this.city).subscribe(data=>{this.weatherData=data})
  console.log("weather cardaaaaaaaaaaaaaaaaaaaa")
  console.log(this.city)
}



}
