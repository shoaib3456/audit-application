import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { next, previous } from 'src/app/actions/tab.actions';

@Component({
  selector: 'app-wrapper',
  templateUrl: './wrapper.component.html',
  styleUrls: ['./wrapper.component.css']
})
export class WrapperComponent implements OnInit {

  tab$: Observable<number>;
  ngOnInit(): void {
  }

  constructor(private store: Store<{ tab: number }>) {
    this.tab$ = store.pipe(select('tab'));
  }

  next() {
    this.store.dispatch(next());

  }
  previous() {
    this.store.dispatch(previous());
  }

}
