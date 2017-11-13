import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { fade } from './../animations';
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
  styleUrls: ['./goteamapp.component.css'],
  animations: [
    fade
    // trigger('fade', [
    //   transition('void => *', [
    //     style({opacity: 0}),
    //     animate(2000)  // style({backgroundColor: 'white', opacity: 1}))  can clean up code because Default state is opacity=1 and bgColor is white
    //   ]),
    //   transition('* => void', [
    //     animate(2000, style({opacity: 0}))
    //   ])
    ]
})
export class GoteamappComponent implements OnInit {

  types: SelectItem[];
  selectedType: string;


  seat: Ticket[];
  selection: Ticket;


  question = 'Which team will make the first 3-pointer in the 4th quarter?';
  prize = 'Pacers t-shirt';
  // animateMe() {
  //   this.state = (this.state === 'one' ? 'two' : 'one');
  // }
  constructor() { 
    this.seat = [
      { name: '101', code: '101' },
      { name: '102', code: '102' },
      { name: '103', code: '103' },
      { name: '104', code: '104' },
      { name: '105', code: '105' },
      { name: '106', code: '106' },
      { name: '107', code: '107' },
      { name: '108', code: '108' }
    ],
    this.types = [];
    this.types.push({ label: 'Pacers', value: 'Pacers' });
    this.types.push({ label: 'Celtics', value: 'Celtics' });
   }

  ngOnInit() {
    
  }

}
