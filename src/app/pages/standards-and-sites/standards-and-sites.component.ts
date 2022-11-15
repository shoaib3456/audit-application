import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-standards-and-sites',
  templateUrl: './standards-and-sites.component.html',
  styleUrls: ['./standards-and-sites.component.css']
})
export class StandardsAndSitesComponent implements OnInit {

  constructor() { }

  clickcheck: number = 0

  on_click_check(num: number) {
    this.clickcheck = num
  }
  ngOnInit(): void {
  }

}
