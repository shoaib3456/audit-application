import { Component, OnInit, NgModule } from '@angular/core';
import { async, Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { next, previous } from 'src/app/actions/tab.actions';
import { tabReducer } from 'src/app/reducers/tab.reducer';

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
    // this.tab$ = store.pipe(select('tab'));
    this.tab$ = this.store.select('tab')
  }

  greaterThan(num1:any, num2: any) {
    return num1 > num2;
  }
  lessThan(num1:any, num2: any) {
    return num1 < num2;
  }

  next() {
    this.store.dispatch(next());

  }
  previous() {
    this.store.dispatch(previous());
  }

}
