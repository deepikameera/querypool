import {Component} from '@angular/core';

@Component({
    selector: 'addquery-component',
    templateUrl: './addquery.component.html'
})
export class AddQueryComponent{
    hidetrue: boolean = true;
    // hidefalse: boolean = false;
    idquery: String = "query";  
    phquery: String = "Enter a query"; 
    phtag: String = "Java C++ PHP etc.";
    idtag: String = "tags";
    validated: boolean = true;

    applyColor(){
        
    }
}
