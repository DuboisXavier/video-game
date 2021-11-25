import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class HttpHeadersInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<string>, next: HttpHandler): Observable<HttpEvent<string>> {
    request = request.clone({
      setHeaders: {
        'rapidapi-key':'esGbwrm390mshS2BCl0RALxQRtZTp1W7sFMjsnyJlJzDXVkW0H',
        'rapidapi-api':'rawg-video-games-database.p.rapidapi.com',
      },
      setParams:{
        key: '406232f9bd8c49a98e5e49fb4fad0dd7',
      }
    });
    return next.handle(request);
  }
}
