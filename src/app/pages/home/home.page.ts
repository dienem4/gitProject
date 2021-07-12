import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute, NavigationEnd } from '@angular/router';
import { ArticleFeed } from 'src/app/interfaces/article-feed';
import { FeedsService } from 'src/app/services/feeds.service';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
    feeds : ArticleFeed[];

   pictures:string []=[
     "https://cdn.britannica.com/82/212182-050-50D9F3CE/basketball-LeBron-James-Cleveland-Cavaliers-2018.jpg",
     "https://www.gannett-cdn.com/presto/2021/03/03/PTAL/47e129cc-68b7-4832-ac3e-43ff653a62c9-JAMES.JPG?width=520&height=597&fit=crop&format=pjpg&auto=webp",
     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGRh-iJ-duocnbfygEPTR0SAOcKnouXG7B3Q&usqp=CAU"
   ]
    
 
  constructor(private router: Router ,private route :ActivatedRoute,private feed: FeedsService) {}
  ionViewWillEnter(){
    console.log("ionViewWillEnter");

    this.router.events.subscribe(async(event)=>{
      if (event instanceof NavigationEnd){
        this.feeds=(this.route.snapshot.data.json)?await this.feed.getDataBJson() :await this.feed.requestByUrlTrashTalk()
      }
     });
  }
     async ngOnInit(){ 
     this.feeds= await this.feed.requestByUrlTrashTalk()
     console.log('ngOnInit');
    }

  randomPicture(){
    let min= Math.ceil(0);
   let max =Math.floor(this.pictures.length);
   return this.pictures[Math.floor(Math.random()*(max-min))+min];
  }
}
