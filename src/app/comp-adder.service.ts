import { CorpDonarComponent } from './corp-donar/corp-donar.component';
import { Injectable, ComponentFactoryResolver, ViewContainerRef } from '@angular/core';
import { BloodDonarComponent } from './blood-donar/blood-donar.component';

@Injectable({
  providedIn: 'root'
})
export class CompAdderService {

  viewRef: ViewContainerRef;
  constructor(private facResolver: ComponentFactoryResolver) { }

   setViewRef(viewRef: ViewContainerRef) {
     this.viewRef = viewRef;
   }

  addComponent(compToAdd) {

     const factory =  this.facResolver.resolveComponentFactory(compToAdd);


   const component = factory.create(this.viewRef.parentInjector);

           if(component.componentType === BloodDonarComponent){

            (<BloodDonarComponent>component.instance).list = ['Rakesh', 'Krish'];

           } else {
            (<CorpDonarComponent>component.instance).list = ['Ganesh', 'Kumaresh'];

           }
     this.viewRef.insert(component.hostView);
  }
}
