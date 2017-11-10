import { Component, OnInit } from '@angular/core';
import { ItemService } from './services/item.service';
import { Item } from './models/Item';
// import { DataListModule } from 'primeng/primeng';
import { Header } from 'primeng/primeng';
import { Footer } from 'primeng/primeng';
@Component({
  selector: 'app-todoapp',
  templateUrl: './todoapp.component.html',
  styleUrls: ['./todoapp.component.css']
})
export class TodoappComponent implements OnInit {

  items: Item[];

  constructor(private itemService: ItemService) { }

  ngOnInit() {
    this.itemService.getItems().subscribe(items => {
      // console.log(items);
      this.items = items;
    });
  }

}
