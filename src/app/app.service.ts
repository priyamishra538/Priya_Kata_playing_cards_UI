import { Injectable } from '@angular/core';
import 'devextreme/data/odata/store';
import { Observable, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';



@Injectable({
    providedIn: 'root'
})
export class AppService {
 
    selectedProduct = new Subject<any>();
    isParamsPassedFromURL:boolean;
    dataPassedFromURL = new Subject<any>();
    constructor(private _httpClient: HttpClient) {
      

    }
    
    getNewDeck<Any>(): Observable<any> {
        let _apiEndpoint = "https://deckofcardsapi.com/api/deck/new/"
        return this._httpClient.get<any>( _apiEndpoint);
    }
    getDrawCard<Any>(deck_id): Observable<any> {
        let _apiEndpoint = "https://deckofcardsapi.com/api/deck/"+deck_id+"/draw/?count=1"
        return this._httpClient.get<any>( _apiEndpoint);
    } 
   
    

}