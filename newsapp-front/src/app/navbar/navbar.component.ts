import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  model={'mykey':''}
  test:Array<String>=["aaa","bbb","ccc"];
  sources:Array<any>=[{
"id": "abc-news",
"name": "ABC News",
"description": "Your trusted source for breaking news, analysis, exclusive interviews, headlines, and videos at ABCNews.com.",
"url": "https://abcnews.go.com",
"category": "general",
"language": "en",
"country": "us"
},
{
"id": "abc-news-au",
"name": "ABC News (AU)",
"description": "Australia's most trusted source of local, national and world news. Comprehensive, independent, in-depth analysis, the latest business, sport, weather and more.",
"url": "http://www.abc.net.au/news",
"category": "general",
"language": "en",
"country": "au"
},
{
"id": "al-jazeera-english",
"name": "Al Jazeera English",
"description": "News, analysis from the Middle East and worldwide, multimedia and interactives, opinions, documentaries, podcasts, long reads and broadcast schedule.",
"url": "http://www.aljazeera.com",
"category": "general",
"language": "en",
"country": "us"
},
{
"id": "ars-technica",
"name": "Ars Technica",
"description": "The PC enthusiast's resource. Power users and the tools they love, without computing religion.",
"url": "http://arstechnica.com",
"category": "technology",
"language": "en",
"country": "us"
},
{
"id": "associated-press",
"name": "Associated Press",
"description": "The AP delivers in-depth coverage on the international, politics, lifestyle, business, and entertainment news.",
"url": "https://apnews.com/",
"category": "general",
"language": "en",
"country": "us"
},
{
"id": "australian-financial-review",
"name": "Australian Financial Review",
"description": "The Australian Financial Review reports the latest news from business, finance, investment and politics, updated in real time. It has a reputation for independent, award-winning journalism and is essential reading for the business and investor community.",
"url": "http://www.afr.com",
"category": "business",
"language": "en",
"country": "au"
},
{
"id": "axios",
"name": "Axios",
"description": "Axios are a new media company delivering vital, trustworthy news and analysis in the most efficient, illuminating and shareable ways possible.",
"url": "https://www.axios.com",
"category": "general",
"language": "en",
"country": "us"
},
{
"id": "bbc-news",
"name": "BBC News",
"description": "Use BBC News for up-to-the-minute news, breaking news, video, audio and feature stories. BBC News provides trusted World and UK news as well as local and regional perspectives. Also entertainment, business, science, technology and health news.",
"url": "http://www.bbc.co.uk/news",
"category": "general",
"language": "en",
"country": "gb"
},
{
"id": "bbc-sport",
"name": "BBC Sport",
"description": "The home of BBC Sport online. Includes live sports coverage, breaking news, results, video, audio and analysis on Football, F1, Cricket, Rugby Union, Rugby League, Golf, Tennis and all the main world sports, plus major events such as the Olympic Games.",
"url": "http://www.bbc.co.uk/sport",
"category": "sports",
"language": "en",
"country": "gb"
},
{
"id": "bleacher-report",
"name": "Bleacher Report",
"description": "Sports journalists and bloggers covering NFL, MLB, NBA, NHL, MMA, college football and basketball, NASCAR, fantasy sports and more. News, photos, mock drafts, game scores, player profiles and more!",
"url": "http://www.bleacherreport.com",
"category": "sports",
"language": "en",
"country": "us"
},
{
"id": "bloomberg",
"name": "Bloomberg",
"description": "Bloomberg delivers business and markets news, data, analysis, and video to the world, featuring stories from Businessweek and Bloomberg News.",
"url": "http://www.bloomberg.com",
"category": "business",
"language": "en",
"country": "us"
},
{
"id": "breitbart-news",
"name": "Breitbart News",
"description": "Syndicated news and opinion website providing continuously updated headlines to top news and analysis sources.",
"url": "http://www.breitbart.com",
"category": "general",
"language": "en",
"country": "us"
},
{
"id": "business-insider",
"name": "Business Insider",
"description": "Business Insider is a fast-growing business site with deep financial, media, tech, and other industry verticals. Launched in 2007, the site is now the largest business news site on the web.",
"url": "http://www.businessinsider.com",
"category": "business",
"language": "en",
"country": "us"
},
{
"id": "business-insider-uk",
"name": "Business Insider (UK)",
"description": "Business Insider is a fast-growing business site with deep financial, media, tech, and other industry verticals. Launched in 2007, the site is now the largest business news site on the web.",
"url": "http://uk.businessinsider.com",
"category": "business",
"language": "en",
"country": "gb"
},
{
"id": "buzzfeed",
"name": "Buzzfeed",
"description": "BuzzFeed is a cross-platform, global network for news and entertainment that generates seven billion views each month.",
"url": "https://www.buzzfeed.com",
"category": "entertainment",
"language": "en",
"country": "us"
},
{
"id": "cbc-news",
"name": "CBC News",
"description": "CBC News is the division of the Canadian Broadcasting Corporation responsible for the news gathering and production of news programs on the corporation's English-language operations, namely CBC Television, CBC Radio, CBC News Network, and CBC.ca.",
"url": "http://www.cbc.ca/news",
"category": "general",
"language": "en",
"country": "ca"
},
{
"id": "cbs-news",
"name": "CBS News",
"description": "CBS News: dedicated to providing the best in journalism under standards it pioneered at the dawn of radio and television and continue in the digital age.",
"url": "http://www.cbsnews.com",
"category": "general",
"language": "en",
"country": "us"
},
{
"id": "cnbc",
"name": "CNBC",
"description": "Get latest business news on stock markets, financial & earnings on CNBC. View world markets streaming charts & video; check stock tickers and quotes.",
"url": "http://www.cnbc.com",
"category": "business",
"language": "en",
"country": "us"
},
{
"id": "cnn",
"name": "CNN",
"description": "View the latest news and breaking news today for U.S., world, weather, entertainment, politics and health at CNN",
"url": "http://us.cnn.com",
"category": "general",
"language": "en",
"country": "us"
},
{
"id": "crypto-coins-news",
"name": "Crypto Coins News",
"description": "Providing breaking cryptocurrency news - focusing on Bitcoin, Ethereum, ICOs, blockchain technology, and smart contracts.",
"url": "https://www.ccn.com",
"category": "technology",
"language": "en",
"country": "us"
},
{
"id": "daily-mail",
"name": "Daily Mail",
"description": "All the latest news, sport, showbiz, science and health stories from around the world from the Daily Mail and Mail on Sunday newspapers.",
"url": "http://www.dailymail.co.uk/home/index.html",
"category": "entertainment",
"language": "en",
"country": "gb"
},
{
"id": "engadget",
"name": "Engadget",
"description": "Engadget is a web magazine with obsessive daily coverage of everything new in gadgets and consumer electronics.",
"url": "https://www.engadget.com",
"category": "technology",
"language": "en",
"country": "us"
}];
  languages:Array<any>=[{'lang':'English','code':'en'},{'lang':'French','code':'fr'},{'lang':'Italian','code':'it'},{'lang':'Spanish','code':'es'},{'lang':'Portugal','code':'pt'}];
  constructor() { }

  ngOnInit() {
  }

}
