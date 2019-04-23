import { Component, OnInit } from '@angular/core';
import { NewsApiService } from '../news-api.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers:[NewsApiService]
})
export class HomeComponent implements OnInit {

  topArticles:Array<any>;
  entArticles:Array<any>;
  sportsArticles:Array<any>;
  techArticles:Array<any>;
  scienceArticles:Array<any>;
  healthArticles:Array<any>;
  businessArticles:Array<any>;
  mSources:Array<any>;
  test:Array<String>=["aaa","bbb","ccc"];
  current:number=0;
  constructor(private newsapi:NewsApiService){
    console.log('app component constructor called');
    var that=this;
    setInterval(function(){
      if(that.topArticles && that.current==that.topArticles.length-1){
        that.current=0;
      }
      else{
        that.current+=1;
      }
    },5000);
  }

  ngOnInit() {
        //load articles
      this.newsapi.initTopArticles().subscribe(data =>{this.topArticles = data['articles']});
      this.newsapi.initEntArticles().subscribe(data =>this.entArticles = data['articles']);
      this.newsapi.initSportsArticles().subscribe(data =>this.sportsArticles = data['articles']);
      this.newsapi.initHealthArticles().subscribe(data =>this.healthArticles = data['articles']);
      this.newsapi.initScienceArticles().subscribe(data =>this.scienceArticles = data['articles']);
      this.newsapi.initTechArticles().subscribe(data =>this.techArticles = data['articles']);
      this.newsapi.initBusinessArticles().subscribe(data =>this.businessArticles = data['articles']);
    //load news sources
    this.newsapi.initSources().subscribe(data=>this.mSources = data['sources']);
    }

    slide(){
      if(this.topArticles && this.current==this.topArticles.length-1){
        this.current=0;
      }
      else{
        this.current+=1;
      }
      console.log(this.current);
      setTimeout(this.slide,2000);
    }

  searchArticles(source){
    console.log("selected source is: "+source);
    this.newsapi.getArticlesByID(source).subscribe(data => this.topArticles = data['articles']);
  }

}
