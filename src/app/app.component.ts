import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Mine Craft  | ';
  titleName = 'akekachai ';
  craftconsole()
  {
console.log(' akekachai test console | ' , this.title);

  }

  craftconsolename(name : string)
  {
    this.titleName = name;
console.log(' akekachai test console | ' , this.titleName);

  }
}
