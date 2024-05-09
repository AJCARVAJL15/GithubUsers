import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  /* https://api.github.com/users*/ 
/* https://api.github.com/search*/

baseUrl: string = 'https://api.github.com/';


  constructor(private httpClient: HttpClient) {}

  GetUsersByName(pName: string) : Promise<any>{
    return lastValueFrom(this.httpClient.get<any>(`${this.baseUrl}search/users?q=${pName}`))
  }
}
