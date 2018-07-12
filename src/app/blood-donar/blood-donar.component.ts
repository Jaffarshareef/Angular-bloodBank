import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-blood-donar',
  templateUrl: './blood-donar.component.html',
  styleUrls: ['./blood-donar.component.css'],
  encapsulation: ViewEncapsulation.Native
})
export class BloodDonarComponent implements OnInit {

  list: any[];
  constructor() { }

  ngOnInit() {
  }

}
