import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { AxiosResponse } from 'axios';
import { map, Observable } from 'rxjs';

@Injectable()
export class ApiService {
  constructor(
    private httpService: HttpService
  ) { }

  getRandomDish(): Observable<AxiosResponse<void>> {
    return this.httpService.get("https://www.themealdb.com/api/json/v1/1/random.php", {
      headers: {
        'Accept': 'application/json'
      }
    }).pipe(
      map(response => response.data),
    );
  }
}
