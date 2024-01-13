import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherserviceService {

  apiKey = "a86070b7a24e79b0594bca250ef14bd5"

  constructor(private http: HttpClient) { }

  consultaTempo(city: string): Observable<any> {
    // Construir os parâmetros da URL usando HttpParams
    const params = new HttpParams()
      .set('q', city)
      .set('appid', this.apiKey)
      .set('units', 'metric')
      .set('lang', 'pt_br');

    // Passar os parâmetros na requisição
    return this.http.get('https://api.openweathermap.org/data/2.5/weather', { params });
  }
}
