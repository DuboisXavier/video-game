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
  public games!: Array<Game>;
  public page: number=1;

  constructor(
    private httpService: HttpService,
    private activatedRoute: ActivatedRoute,
   
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(() => {
          this.searchGames('release',2);      
      });
  }
  
  searchGames(sort:string, page: number): void{
    this.httpService
      .getGameList(sort, page)
      .subscribe((gameList: APIResponse<Game>) => {
        this.games = gameList.results;
        console.log(gameList);
      })
  }
  next(sort: string): void{
    this.page+=1;
    this.searchGames(sort, this.page);
  }
  back(sort: string): void{
    this.page-=1;
    this.searchGames(sort, this.page);
  }
  
}

