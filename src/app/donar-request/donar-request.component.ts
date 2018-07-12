import { DonationRequest } from './../donation-request';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-donar-request',
  templateUrl: './donar-request.component.html',
  styleUrls: ['./donar-request.component.css']
})
export class DonarRequestComponent implements OnInit {

  requestList: DonationRequest[];
  constructor() { 

    this.requestList = [
      
      {bloodGroup: 'opos', requiredDate: new Date(2018, 08, 21), handlingCharges: 890.245},
      {bloodGroup: 'bpos', requiredDate: new Date(2018, 09, 21), handlingCharges: 890.245},
      {bloodGroup: 'bpos', requiredDate: new Date(2018, 09, 21), handlingCharges: 890.245}

    ];
  }

  ngOnInit() {
  }

}
