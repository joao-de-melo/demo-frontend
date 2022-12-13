import { Component, OnInit } from '@angular/core';
import {ListSortService} from '../../services/list-sort.service';

@Component({
  selector: 'app-gather-data',
  templateUrl: './gather-data.component.html',
  styleUrls: ['./gather-data.component.css']
})
export class GatherDataComponent implements OnInit {
  newNumber = null;
  currentList: Number[] = [];

  constructor(private listSortService: ListSortService) { }

  ngOnInit(): void {}


  addNumber() {
    const parsedNumber = parseInt(this.newNumber, 10);
    if (isNaN(parsedNumber)) {
      alert('Invalid number');
    } else {
      this.currentList.push(parsedNumber);
    }
    this.newNumber = '';
  }

  sort() {
    this.listSortService.sort(this.currentList.slice());
  }

  reset() {
    this.currentList = [];
  }
}
