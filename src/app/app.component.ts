import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-new';
  myname = "Zakaria";
  myInfo:boolean = false;
  myName:string = "Alice";
  myAge:number = 25;


  greet(myInfo: boolean)
  {
   console.log("hiiii");
   this.myInfo = !myInfo;
  }

  onsave()
  {
    console.log("hii");
  }



}
