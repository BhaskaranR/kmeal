import {Directive, ElementRef, Input, OnInit,NgZone,OnDestroy, ChangeDetectorRef} from '@angular/core';
import * as moment from "moment";
import { interval } from 'rxjs';

@Directive({
    selector:'[dealTimer]',
})
export class DealTimerDirective implements OnInit, OnDestroy{
    @Input() dealTimer:string;

    intervalSub:any;
    constructor(
        public ele: ElementRef,
        private cdr: ChangeDetectorRef){}

    ngOnInit(){
        console.log(this.ele);
        this.cdr.markForCheck();
        this.intervalSub = interval(1000).subscribe(result =>{
            let startTime = moment();
            let endTime = moment('06:00 pm 2019-01-29');
            let diff = moment(endTime.diff(startTime));
            let actualDiff = diff.hours() + ':' + diff.minutes() + ":" + diff.seconds();
            if (!!this.ele.nativeElement.parentNode){
                this.ele.nativeElement.innerHTML=  actualDiff;
            }

            console.log(actualDiff);
        })
    }

    ngOnDestroy(){
        this.intervalSub.unsubscribe();
    }
}