import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { HttpHeadersInterceptor } from 'src/app/interceptors/http-headers.interceptor';
import { APIResponse, Game } from 'src/app/models';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public sort!: string;
  public games!: Array<Game>
  constructor(
    private httpService: HttpService,
    private activatedRoute: ActivatedRoute,
   
  ) { }


  ngOnInit(): void {
    this.activatedRoute.params.subscribe(() => {
          this.searchGames('release');      
      });
  }
  
  searchGames(sort:string): void{
    this.httpService
      .getGameList(sort)
      .subscribe((gameList: APIResponse<Game>) => {
        this.games = gameList.results;
        console.log(gameList);
      })
  }
  
}

