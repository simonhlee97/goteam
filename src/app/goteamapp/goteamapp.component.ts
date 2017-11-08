import { Component, OnInit } from '@angular/core';
import { ButtonModule } from 'primeng/primeng';

@Component({
  selector: 'goteamapp',
  templateUrl: './goteamapp.component.html',
  styleUrls: ['./goteamapp.component.css']
})
export class GoteamappComponent implements OnInit {

  question = 'Which team will hit the first 3-pointer of tonight\'s game?';
  prize = 'Pacers t-shirt';
  
  constructor() { }

  ngOnInit() {
    
  }

}
