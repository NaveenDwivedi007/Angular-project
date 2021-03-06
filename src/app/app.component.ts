import { Component } from '@angular/core';
import arraycountry from '../Ultility/country'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Country-selector';
  words:string="";
  limit:number= 98;
  newlimit(newlimit:number){
    this.limit=newlimit;
  }
  
  onecountry(){
    this.words=arraycountry[this.limit]
  }
  generate(){
    this.words= arraycountry.slice(0, this.limit).join(",")
  }
  random(){
    let NumberOne:number = 1;
    let NumberTwo:number = 249;
    this.limit=Math.floor(Math.random()*(NumberTwo-NumberOne)+NumberOne)
    this.words=arraycountry[this.limit];
  }
}
