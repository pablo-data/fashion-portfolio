import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-portfolio-fashion';


  resetPosition(event: any) {
    let content : any = document.getElementById("content");
    //content.scrollTop = 0;
  }
}
