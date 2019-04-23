import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NewsApiService } from './news-api.service';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { AllnewsComponent } from './allnews/allnews.component';
import { SearchResultsComponent } from './search-results/search-results.component';

const ROUTES:Routes=[{path:'home',component:HomeComponent},{path:'',redirectTo:'home',pathMatch:'full'},{path:'news/:id',component:AllnewsComponent},{path:'search/:key',component:SearchResultsComponent}];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AllnewsComponent,
    SearchResultsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [NewsApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
