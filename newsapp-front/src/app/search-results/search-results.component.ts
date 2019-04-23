import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { NewsApiService } from '../news-api.service';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent implements OnInit {
  searchArticles:Array<any>;
  key:string;

  constructor(private newsapi:NewsApiService,private route: ActivatedRoute,private location: Location) { }

  ngOnInit() {
    this.key = this.route.snapshot.paramMap.get("key")
    console.log(typeof(this.key))
    this.newsapi.getArticlesByKey(this.key).subscribe(data => this.searchArticles = data['articles']);
  }

}
