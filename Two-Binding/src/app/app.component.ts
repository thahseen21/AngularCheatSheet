import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Sample';
  fontSize:number;
  
  constructor() {
    this.fontSize = 12;
  }

  fontSizeChange(event:number){
    this.fontSize = event;
  }

  PassThisMethodToChild(){
    alert('Potato');
  }
}

