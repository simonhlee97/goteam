import { Component, OnInit } from '@angular/core';
import { SelectButtonModule, SelectItem } from 'primeng/primeng';

@Component({
  selector: 'pacers',
  templateUrl: './pacers.component.html',
  styleUrls: ['./pacers.component.css']
})
export class PacersComponent implements OnInit {
  types: SelectItem[];

  selectedType: string;

  selectedTypes: string[] = ['Apartment', 'Studio'];

  constructor() {
    this.types = [];
    this.types.push({ label: 'Apartment', value: 'Apartment' });
    this.types.push({ label: 'House', value: 'House' });
    this.types.push({ label: 'Studio', value: 'Studio' });
  }

  clear() {
    this.selectedType = null;
    this.selectedTypes = [];
  }
  

  ngOnInit() {
  }

}