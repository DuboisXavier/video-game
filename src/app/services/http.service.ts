import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment as env } from 'src/environments/environment';
import { APIResponse, Game } from '../models';


@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }
  
  getGameList(orde: string): Observable<APIResponse<Game>>{

    let params = new HttpParams().set('ordering', orde);
    
    return this.http.get<APIResponse<Game>>(`${env.BASE_URL}/games`, {
      params: params,

    });
  }

}
