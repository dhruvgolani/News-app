import { Component,OnInit } from '@angular/core';
import { NewsApiService } from './news-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[NewsApiService]
})

export class AppComponent {
  title = 'newsapp-front';
  constructor(private newsapi:NewsApiService){
    console.log('app component constructor called');
  }

  ngOnInit() {

    }


}
