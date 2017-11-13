import { Component, OnInit } from '@angular/core';
import { ButtonModule } from 'primeng/primeng';
import { RouterLink } from '@angular/router';
import {trigger,state,style,transition,animate,keyframes} from '@angular/animations';


@Component({
  selector: 'goteamapp',
  templateUrl: './goteamapp.component.html',
  styleUrls: ['./goteamapp.component.css'],
  animations: [
    trigger('myAwesomeAnimation', [
      state('small', style({
        transform: 'scale(1)'
      })),
      state('large', style({
        transform: 'scale(1.2)'
      })),
      transition('small <=> large', animate('300ms ease-in', keyframes([
        style({ opacity: 0, transform: 'translateY(-75%)', offset: 0 }),
        style({ opacity: 1, transform: 'translateY(35px)', offset: 0.5 }),
        style({ opacity: 1, transform: 'translateY(0)', offset: 1.0 })
      ])))
    ])
  ]
})
export class GoteamappComponent implements OnInit {

  state: string = 'small';
  prize = 'Pacers t-shirt';
  animateMe() {
    this.state = (this.state === 'small' ? 'large' : 'small');
  }
  constructor() { }

  ngOnInit() {
    
  }

}
