import { Injectable } from '@angular/core';
import { HttpClient, HttpParams} from '@angular/common/http';
import { Gif, SearchGifsResponse } from '../interfaces/interfaces';


@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private gifUrl       : string   = 'https://api.giphy.com/v1/gifs';
  private api_key      : string   = "P0r5X21Si6H8u44AHqUQMv4459pb1yW2";
  private _dashboardArr: string[] = [];

  public queryResults: Gif[] = [];

  get dashboardArr(){
    return [...this._dashboardArr];
  }

  constructor(private http: HttpClient){

    this._dashboardArr = JSON.parse( localStorage.getItem('localStoreDash')! ) || []
    this.queryResults = JSON.parse( localStorage.getItem('localStoreResults')! ) || []
  }
  
  searchGifs(query: string){

    query = query.trim().toLocaleLowerCase();

    if ( !this._dashboardArr.includes( query )){
      this._dashboardArr.unshift( query ) ;
      this._dashboardArr = this._dashboardArr.splice(0,10)
      
      localStorage.setItem('localStoreDash', JSON.stringify( this._dashboardArr ));
    }

    const params = new HttpParams()
      .set('api_key', this.api_key)
      .set('limit', '10')
      .set('q', query);

    this.http.get<SearchGifsResponse>(`${ this.gifUrl }/search?`, { params })
      .subscribe( (resp )=> { 
        this.queryResults = resp.data;
        localStorage.setItem('localStoreResults', JSON.stringify( this.queryResults ));

      });

  }

}
