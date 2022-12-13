import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ListSortService {
  private listSort = new BehaviorSubject([]);
  currentSortedList = this.listSort.asObservable();

  constructor(private http: HttpClient) { }

  sort (list: Number[]) {
    this.http.post<Number[]>('/api/list/sort', JSON.stringify(list), {
      headers: {
        'Content-Type': 'application/json'
      },
      responseType: 'json'
    }).subscribe(data => {

      this.listSort.next(data);
    });
  }
}
