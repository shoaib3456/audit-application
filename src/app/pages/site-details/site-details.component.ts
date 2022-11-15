import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';

@Component({
  selector: 'app-site-details',
  templateUrl: './site-details.component.html',
  styleUrls: ['./site-details.component.css']
})
export class SiteDetailsComponent implements OnInit {

  radio1 : number = 0
  tab$: Observable<number>;

  radio1change (num : number) {
    this.radio1 = num
  }

  constructor(private store: Store<{ tab: number }>) {
    this.tab$ = store.pipe(select('tab'));
  }

  greaterThan(num1:any, num2: any) {
    return num1 > num2;
  }
  lessThan(num1:any, num2: any) {
    return num1 < num2;
  }


  ngOnInit(): void {
  }

}
