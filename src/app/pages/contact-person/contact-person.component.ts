import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-person',
  templateUrl: './contact-person.component.html',
  styleUrls: ['./contact-person.component.css']
})
export class ContactPersonComponent implements OnInit {

  constructor() { }

  audit_check: number = 0

  on_audit_check_change (num : number) {
    this.audit_check = num
  }

  ngOnInit(): void {
  }

}
