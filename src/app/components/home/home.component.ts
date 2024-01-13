import { WeatherserviceService } from './../../services/weatherservice.service';
import { Component, Output } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
@Output() city!: string 


pesquisa(){
  console.log("fjasdjfajsdfjasd")
}

}
