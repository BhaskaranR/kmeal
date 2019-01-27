import {Directive, ElementRef, Input, OnInit,ViewContainerRef, TemplateRef} from '@angular/core';

@Directive({
    selector:'dealTimer'
})
export class DealTimerDirective implements OnInit{
    @Input() dealTimer:string;
    constructor(
        ele: ElementRef,
        tempRef: TemplateRef<any>,
        viewConRef:ViewContainerRef){}

    ngOnInit(){
        console.log(this);
    }
}