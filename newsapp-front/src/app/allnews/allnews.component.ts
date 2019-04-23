import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { NewsApiService } from '../news-api.service';

@Component({
  selector: 'app-allnews',
  templateUrl: './allnews.component.html',
  styleUrls: ['./allnews.component.css']
})
export class AllnewsComponent implements OnInit {


  constructor(private newsapi:NewsApiService,private route: ActivatedRoute,private location: Location) { }

  allArticles:Array<any>;
  search:String;

  ngOnInit() {
    this.getNews()
  }

  getNews():void{
    const id = +this.route.snapshot.paramMap.get('id');
    if(id==1){
      this.search=''
    }
    else if(id==2){
      this.search='entertainment'
    }
    else if(id==3){
      this.search='sports'
    }
    else if(id==4){
      this.search='technology'
    }
    else if(id==5){
      this.search='business'
    }
    else if(id==6){
      this.search='health'
    }
    else{
      this.search='science'
    }
    this.newsapi.getArticlesByTopic(this.search).subscribe(data => this.allArticles = data['articles']);
    console.log(this.allArticles);
  }
}
