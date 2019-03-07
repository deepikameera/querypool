import { Directive, Input, TemplateRef, ViewContainerRef, OnChanges } from '@angular/core';


@Directive({
    selector:'[ngLoop]'
})
export class LoopDirective implements OnChanges{
    @Input() ngLoop;
    constructor(private _templateRef:  TemplateRef<any>, private _viewContainerRef: ViewContainerRef){}

ngOnChanges(){
    console.log("this.ngLoop: ",this.ngLoop);
    for(let i = 0;i < this.ngLoop; i++){
        this._viewContainerRef.createEmbeddedView(this._templateRef);

    }
}
}