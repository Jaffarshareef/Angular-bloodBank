import { DonationRequest } from './../donation-request';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-donar-request',
  templateUrl: './donar-request.component.html',
  styleUrls: ['./donar-request.component.css']
})
export class DonarRequestComponent implements OnInit {

  request: DonationRequest ={
    bloodGroup : '',
    handlingCharges: 0.0,
    requiredDate: ''
  };
  groups = ['opos', 'bpos', 'apos', 'aneg', 'oneg' ,'bneg' ,'abpos' ,'abneg'];
  requestList: DonationRequest[];
  constructor(){ 

    this.requestList = [
      
      {'bloodGroup': 'opos', 'requiredDate': '2018-08-20', 'handlingCharges': 890.245},
      {'bloodGroup': 'bpos', 'requiredDate': '2018-08-20', 'handlingCharges': 590.245},
      {'bloodGroup': 'bpos', 'requiredDate': '2018-08-20', 'handlingCharges': 790.245}

    ];
  }

  ngOnInit() {
  }

  submit(frmData){
     
    this.request = frmData;
     console.log(frmData);
  }
}
