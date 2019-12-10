import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FriendlistComponent } from './components/friendlist/friendlist.component';
import { FlParentComponent } from './components/fl-parent/fl-parent.component';
import {MDBBootstrapModule} from 'angular-bootstrap-md';
import { NewFriendContainerComponent } from './components/new-friend/containers/new-friend-container/new-friend-container.component';
import { NewFriendComponent } from './components/new-friend/components/new-friend/new-friend.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { CalendarModule } from '@syncfusion/ej2-angular-calendars';
import { CalendarComponent } from './components/calendar/calendar.component';


@NgModule({
  declarations: [
    AppComponent,
    FriendlistComponent,
    FlParentComponent,
    NewFriendContainerComponent,
    NewFriendComponent,
    CalendarComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    CalendarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
