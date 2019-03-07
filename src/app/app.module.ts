import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WrapperComponent } from './wrapper/wrapper.component';
import { NavComponent } from './wrapper/nav/nav.component';
import { QueryComponent } from './wrapper/query/query.component';
import { AddQueryComponent } from './wrapper/query/actions/add/addquery.component';
import { InputComponent } from './wrapper/query/shared/input.component';
import { RepeatDirective } from './wrapper/query/shared/repeat.directive';
import { LoopDirective } from './wrapper/query/shared/loop.directive';
import { InputDirective } from './wrapper/query/shared/input.directive';
import { sortPipe } from './wrapper/query/shared/sort.pipe';
import { ViewComponent } from './wrapper/query/actions/view/view.component';

@NgModule({
  declarations: [
    AppComponent,
    WrapperComponent,
    NavComponent,
    QueryComponent,
    AddQueryComponent,
    ViewComponent,
    InputComponent,
    RepeatDirective,
    LoopDirective,
    InputDirective,
    sortPipe
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
