import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-play',
  templateUrl: './play.component.html',
  styleUrls: ['./play.component.css']
})
export class PlayComponent implements OnInit {


  question = 'Which team will make the first 3-pointer in the 4th quarter?';
  constructor() { }

  ngOnInit() {
  }

}
