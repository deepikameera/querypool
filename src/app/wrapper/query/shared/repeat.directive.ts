import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';


@Directive({
    selector:'[repeat]'
})
export class RepeatDirective{
    constructor(private _templateRef: TemplateRef<any>, private _viewContainerRef: ViewContainerRef){    }

    @Input() set  repeat(data: Array<number>)
    {
        for(let i = 0; i < data.length; i++)
        {
            this._viewContainerRef.createEmbeddedView(this._templateRef);
        }
    }
}