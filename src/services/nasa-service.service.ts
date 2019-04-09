import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class NasaServiceService {

  planets: Planet[] = [
    { name: 'Jupiter', size: 'grootste' },
    { name: 'Saturnus', size: 'op 1 na grootste' },
    { name: 'Venus', size: 'Op 2 na grootste' }
  ];

  nasaUrl = 'https://api.nasa.gov/planetary/apod?api_key=NNKOjkoul8n1CH18TWA9gwngW1s1SmjESPjNoUFo';

  constructor(private http: HttpClient) { }

  getNasaData() {
    return this.http.get(this.nasaUrl);
  }
}
