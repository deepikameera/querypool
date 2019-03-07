import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
    selector: '[inputValidation]'
})
export class InputDirective implements OnInit{
    constructor(private _element: ElementRef){
        console.log("This is a validator at ")
    }
    ngOnInit(){

    }
}