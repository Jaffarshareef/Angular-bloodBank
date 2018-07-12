import { Directive, Renderer2, OnInit, ElementRef, HostListener, Input } from '@angular/core';
import { POINT_CONVERSION_COMPRESSED } from 'constants';

@Directive({
  selector: '[appShadow]'
})
export class ShadowDirective implements OnInit{

  @Input() prefColor: string;
  constructor(private elementRef: ElementRef,
     private renderer: Renderer2) { }

      ngOnInit(){

        console.log('element' + this.elementRef);
        console.log('native element'+this.elementRef.nativeElement);
         this.renderer.setStyle(this.elementRef.nativeElement, 
                'box-shadow', '10px 10px 20px #dcdcdc');


      }

      @HostListener('mouseover')
      onover(){
        this.renderer.
         setStyle(this.elementRef.nativeElement, 
                    'color', this.prefColor);
      } 
      
      @HostListener('mouseout')
      onout(){
        this.renderer.setStyle(
           this.elementRef.nativeElement,
              'color', '#000000');
      }
}
