import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  mydate = new Date();
  myJson = {name:"zakaria",age:25,department:"Backend developer",address:{city:'safi',phoneNumber:12308493}}
  myArrayNum = [22,23,12,90,100];

  printNumber:number = 12;
  fullname:string = "Muhammed";
  title = 'angular-new';
  myname = "Zakaria";
  myInfo: boolean = false;
  myName: string = "Alice";
  someText:string = "You can change me";

  customerArray = [1, 2, 3, 4, 5, 6, 7];

  personObject = 
  [
    {
        name: 'Ebony',
        age: 25,
        city: 'ohayo'
    },
    {
        name: 'Ebony',
        age: 25,
        city: 'ohayo'
    },
    {
        name: 'Ebony',
        age: 25,
        city: 'ohayo'
    },
  ]


   greet(myInfo: boolean)
   {
     console.log("hiiii");
     this.myInfo = !myInfo;
   }

    sum()
    {
      return  this.printNumber + 34; 
    }

    onsave()
    {
      console.log("hii");
    }



}
