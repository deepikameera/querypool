import {Component,Input } from '@angular/core'

@Component({
    selector: 'input-component',
    templateUrl: './input.component.html'
})
export class InputComponent{
    @Input() hideVal: boolean;
    @Input() textid: String;
    @Input() pHolder: String;

}
