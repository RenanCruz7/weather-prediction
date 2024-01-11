import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WeatherserviceService {

  private readonly API = "https://api.openweathermap.org/data/2.5/weather?"

  header = new HttpHeaders({
  })


  constructor(private http: HttpClient) { }
}
