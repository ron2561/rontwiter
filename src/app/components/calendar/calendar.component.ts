import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { FormGroup} from '@angular/forms';
import {$} from 'protractor';
import {Friend} from '../../entities/friend';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {

  public minDate: Date = new Date ('30/10/2018');
  public maxDate: Date = new Date ('12/01/2022');
  public value: Date = new Date ('30/11/2019');


  newSessionForm: any;

  @Output()
  newFriend = new EventEmitter<Friend>();
  newFriendsForm: any;

  constructor() {}

  onSubmit(friendData: any) {
    const friend: Friend = new Friend(friendData.id, friendData.name, friendData.age);
    this.newFriend.emit(friend);
    // this.resetFriendFields();
    this.newFriendsForm.reset();
  }

  ngOnInit() {
    /*
    setTimeout(() => {
      $('#calendar').fullCalendar({
        header: {
          left   : 'prev,next today',
          center : 'title',
          right  : 'month,agendaWeek,agendaDay'
        },
        navLinks   : true,
        editable   : true,
        eventLimit : true,
        events: [
          {
            title : 'This is your',
            start : '2019-03-03T12:30:00',
            color : '#f9c66a' // override!
          },
          {
            title : 'Your meeting with john',
            start : '2019-03-07T12:30:00',
            end   : '2019-03-09',
            color : '#019efb'
          },
          {
            title  : 'This is Today',
            start  : '2019-03-12T12:30:00',
            allDay : false, // will make the time show,
            color  : '#57cd5f'
          }
        ],  // request to load current events
      });
    }, 100); */
}
}
