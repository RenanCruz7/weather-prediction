import { WeatherserviceService } from './../../services/weatherservice.service';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
city!:string;
weatherData: any;

constructor(private  weatherService:WeatherserviceService){}

pesquisaCidade(form: NgForm){
  this.weatherService.consultaTempo(this.city).subscribe(data=>{this.weatherData=data})
}

}
