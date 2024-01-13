import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WeatherserviceService {

  private readonly apiKey = "f6e0ea0dab5dbb1303a2a971e6601eff"

  header = new HttpHeaders({
  })
  constructor(private http: HttpClient) { }


  consultaTempo(city: string){
    return this.http.get(`https://api.openweathermap.org/data/2.5/weather?q={city}&lang=pt_b&appid={this.apiKey}&units=metric`)
  }
}
