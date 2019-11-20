import { Component, OnInit } from '@angular/core';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-display-time',
  templateUrl: './display-time.component.html',
  styleUrls: ['./display-time.component.css']
})
export class DisplayTimeComponent implements OnInit {

getSecond : any;
CurrentTime : string; 
word : string;

  constructor() { 
    setInterval(() => {
      this.CurrentTime = new Date().getHours() + ':' + new Date().getMinutes() + ':'+  new Date().getSeconds();
      this.getSecond= new Date().getSeconds();
      if(this.getSecond < 10)
        this.getSecond = "0"+this.getSecond;
      this.word =""; 

       if(this.getSecond != 0)
       {
        if(this.getSecond % 3 === 0)
          this.word ="Fizz";
        if(this.getSecond % 5 === 0)
          this.word +="Buzz";  
      }
    }, 500); 
      
     
  }

  ngOnInit() {
    }

}
