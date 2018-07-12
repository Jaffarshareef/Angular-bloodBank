import { BloodDonarComponent } from './../blood-donar/blood-donar.component';
import { CompAdderService } from './../comp-adder.service';
import { Component, OnInit, Input, ViewChild, ViewContainerRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-adder',
  templateUrl: './adder.component.html',
  styleUrls: ['./adder.component.css']
})
export class AdderComponent implements OnInit  {

  @ViewChild('plcHolder',{read: ViewContainerRef})
            vref: ViewContainerRef;
  @Input() compToAdd: any;
  constructor(private service: CompAdderService) { }

  ngOnInit() {

    this.service.setViewRef(this.vref);
    this.service.addComponent(this.compToAdd);

  }


}
