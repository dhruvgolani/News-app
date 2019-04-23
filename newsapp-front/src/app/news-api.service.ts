import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders,HttpRequest  } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class NewsApiService {

  api_key = 'cf73c18a08e7494590bb9af53b1b9205';

  constructor(private http:HttpClient) { }
  initSources(){
     return this.http.get('https://newsapi.org/v2/sources?apiKey=cf73c18a08e7494590bb9af53b1b9205');
  }
  initTopArticles(){
   return this.http.get('https://newsapi.org/v2/top-headlines?country=in&apiKey=cf73c18a08e7494590bb9af53b1b9205');
  }
  initEntArticles(){
   return this.http.get('https://newsapi.org/v2/top-headlines?country=in&category=entertainment&apiKey=cf73c18a08e7494590bb9af53b1b9205');
  }
  initSportsArticles(){
   return this.http.get('https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=cf73c18a08e7494590bb9af53b1b9205');
  }
  initTechArticles(){
   return this.http.get('https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=cf73c18a08e7494590bb9af53b1b9205');
  }
  initBusinessArticles(){
   return this.http.get('https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=cf73c18a08e7494590bb9af53b1b9205');
  }
  initScienceArticles(){
   return this.http.get('https://newsapi.org/v2/top-headlines?country=in&category=science&apiKey=cf73c18a08e7494590bb9af53b1b9205');
  }
  initHealthArticles(){
   return this.http.get('https://newsapi.org/v2/top-headlines?country=in&category=health&apiKey=cf73c18a08e7494590bb9af53b1b9205');
  }
  getArticlesByID(source: String){
   return this.http.get('https://newsapi.org/v2/top-headlines?sources='+source+'&apiKey=cf73c18a08e7494590bb9af53b1b9205');
  }
  getArticlesByTopic(topic:String){
   return this.http.get('https://newsapi.org/v2/top-headlines?category='+topic+'&country=in&pageSize=100&apiKey=cf73c18a08e7494590bb9af53b1b9205');
  }
  getArticlesByKey(key:String){
   return this.http.get('https://newsapi.org/v2/everything?q='+key+'&sortBy=relevancy&apiKey=cf73c18a08e7494590bb9af53b1b9205');
  }
}
