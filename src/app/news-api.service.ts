import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
 
@Injectable({
  providedIn: 'root'
})
export class NewsApiService {

  api_key = '8f502064ee554aa19fd0cb6253679597';


  constructor(private http:HttpClient) { }
  initSources(){
    return this.http.get('https://newsapi.org/v2/sources?language=en&apiKey='+this.api_key);
  }
  initArticles(){
    return this.http.get('https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey='+this.api_key);
  }
  getArticlesByID(source: String){
    return this.http.get('https://newsapi.org/v2/top-headlines?sources='+source+'&api_key='+this.api_key);
  }
}
