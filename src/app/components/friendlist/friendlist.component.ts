import {Component, Input, OnInit} from '@angular/core';
// @ts-ignore
import {Friend} from '../../entitie';
import {FriendService} from '../../services/friend.service';

@Component({
  selector: 'app-friendlist',
  templateUrl: './friendlist.component.html',
  styleUrls: ['./friendlist.component.css']
})
export class FriendlistComponent implements OnInit {

 @Input()
  friend: Friend;



  constructor(private friendService: FriendService) {
  }

  ngOnInit() {

  }

  deleteFriend(friendId: number){
    this.friendService.deleteFriend(friendId);
  }
}
