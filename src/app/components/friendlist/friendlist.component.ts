import {Component, Input, OnInit} from '@angular/core';
// @ts-ignore
import {Friend} from '../../entitie';

@Component({
  selector: 'app-friendlist',
  templateUrl: './friendlist.component.html',
  styleUrls: ['./friendlist.component.css']
})
export class FriendlistComponent implements OnInit {

 @Input()
  friend: Friend;

  constructor() {
  }

  ngOnInit() {

  }

}
