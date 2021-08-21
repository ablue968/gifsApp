import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Gif, SearchGifsResponse } from '../interfaces/interfaces';


@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private base_url     : string   ='https://api.giphy.com/v1/gifs/search'
  private api_key      : string   = "P0r5X21Si6H8u44AHqUQMv4459pb1yW2";
  private _dashboardArr: string[] = [];

  public queryResults: Gif[] = [];

  get dashboardArr(){
    return [...this._dashboardArr];
  }

  constructor(private http: HttpClient){ }
  
  searchGifs(query: string){

    query = query.trim().toLocaleLowerCase();

    if ( !this._dashboardArr.includes(query) ){
      this._dashboardArr.unshift(query);
      this._dashboardArr = this._dashboardArr.splice(0,10)
    }

    this.http.get<SearchGifsResponse>(`${this.base_url}?api_key=${this.api_key}&q=${ query }&limit=10`)
      .subscribe( (resp )=> { 
        this.queryResults = resp.data;
      });

  }

}
