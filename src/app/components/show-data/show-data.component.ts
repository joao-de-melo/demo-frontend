import { Component, OnInit } from '@angular/core';
import {ListSortService} from '../../services/list-sort.service';

@Component({
  selector: 'app-show-data',
  templateUrl: './show-data.component.html',
  styleUrls: ['./show-data.component.css']
})
export class ShowDataComponent implements OnInit {
  list: Number[] = [];

  constructor(private listSortService: ListSortService) { }

  ngOnInit(): void {
    this.listSortService.currentSortedList.subscribe(newList => {
      console.log(newList);
      this.list = newList;
    });
  }
}
