import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

import { SelectItem } from 'primeng/primeng';
import { DropdownModule } from 'primeng/primeng';
import {trigger,state,style,transition,animate,keyframes} from '@angular/animations';

interface Ticket {
  name: string,
  code: string
}

@Component({
  selector: 'goteamapp',
  templateUrl: './goteamapp.component.html',
  styleUrls: ['./goteamapp.component.css']
})
export class GoteamappComponent implements OnInit {

  teams: SelectItem[];
  selectedType: string;

  seat: Ticket[];
  selection: Ticket;

  question = 'Which team will make the first 3-pointer in the 4th quarter?';
  prize = 'Pacers t-shirt';

  showHide: boolean;
  constructor() { 
    this.showHide = true;
    this.seat = [
      { name: '101', code: '101' },
      { name: '102', code: '102' },
      { name: '103', code: '103' },
      { name: '104', code: '104' },
      { name: '105', code: '105' },
      { name: '106', code: '106' },
      { name: '107', code: '107' }
    ],
    this.teams = [];
    this.teams.push({ label: 'Pacers', value: 'Pacers' });
    this.teams.push({ label: 'Celtics', value: 'Celtics' });
   }
  switchdiv(){
    // hide #goteam and display #play
    this.showHide = !this.showHide;
  }
  
  ngOnInit() {
    
  }

}
