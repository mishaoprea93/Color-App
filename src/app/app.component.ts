import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string;
  colors:string[];
  barcode:string[];

  constructor(){
    this.title='Welcome To The Retro Barcode!';
    this.colors=['#DC143C','#00FFFF','#B8860B','#FF00FF','#008000','#FF4500'];
    this.barcode=[];
    for(let i=0;i<10;i++){
      this.barcode.push(this.colors[Math.floor(Math.random()*this.colors.length)]);
    }
  }
}
