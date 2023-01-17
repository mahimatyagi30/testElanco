import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiCallServiceService {
   baseUrl ="https://engineering-task.elancoapps.com/api/"
  data: any[] | undefined;
  results$: Observable<any> | undefined;
  constructor(private httpClient: HttpClient) { }

  /**
   * This will call the api and fetch data
   * @param endpoint 
   * @returns 
   */
  public get(endpoint : string) : Observable<any>{
    return this.httpClient.get(this.baseUrl + endpoint);
  }
}
