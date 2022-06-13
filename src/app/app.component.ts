import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-new';
  myname = "Zakaria";
  myInfo: boolean = false;
  myName: string = "Alice";

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

onsave()
{
  console.log("hii");
}



}
