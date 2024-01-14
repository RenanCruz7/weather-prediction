// weatherservice.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { City } from '../interfaces/city';

@Injectable({
  providedIn: 'root'
})
export class WeatherserviceService {
  apiKey = "a86070b7a24e79b0594bca250ef14bd5";

  constructor(private http: HttpClient) {}

  consultaTempo(city: string): Observable<City> {
    const params = new HttpParams()
      .set('q', city)
      .set('appid', this.apiKey)
      .set('units', 'metric')
      .set('lang', 'pt_br');

    return this.http.get<any>('https://api.openweathermap.org/data/2.5/weather', { params })
      .pipe(
        map(response => ({
          id: response.id,
          main: response.weather[0].main,
          description: response.weather[0].description,
          temp: response.main.temp,
          temp_min: response.main.temp_min,
          temp_max: response.main.temp_max,
          name: response.name,
        }))
      );
  }
}
