import { Component, OnInit } from '@angular/core';
import { ButtonModule } from 'primeng/primeng';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'goteamapp',
  templateUrl: './goteamapp.component.html',
  styleUrls: ['./goteamapp.component.css']
})
export class GoteamappComponent implements OnInit {

  
  prize = 'Pacers t-shirt';
  
  constructor() { }

  ngOnInit() {
    
  }

}
