import { Component } from '@angular/core';

@Component({
    selector:'view-component',
    templateUrl: './view.component.html'
})
export class ViewComponent{


    data: Array<number> = [1,2,3,4];

    // ObjectArrayForSort: Array<any> = [["one","two"],[1,3],[3,4]];

    ObjectArrayForSort: Array<any> = [[8,9],[5,3],[3,4]];

}