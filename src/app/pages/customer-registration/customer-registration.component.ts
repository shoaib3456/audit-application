import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer-registration',
  templateUrl: './customer-registration.component.html',
  styleUrls: ['./customer-registration.component.css']
})
export class CustomerRegistrationComponent implements OnInit {

  isDropShow: boolean = false;
  isTableShow: boolean = true;

  ngOnInit(): void {
  }

  constructor() {
  }

  hideTable(){
    this.isTableShow = false
  }

  inputchange(e: any) {
    if(e.target.value.split("").length > 0){
      this.isDropShow = true;
    }else{
      this.isDropShow = false;
    }
  }

}
