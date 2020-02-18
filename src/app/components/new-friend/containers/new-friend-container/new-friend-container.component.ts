import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Friend} from '../../../../entities/friend';
import {FriendService} from '../../../../services/friend.service';

@Component({
  selector: 'app-new-friend-container',
  templateUrl: './new-friend-container.component.html',
  styleUrls: ['./new-friend-container.component.scss']
})
export class NewFriendContainerComponent implements OnInit {

@Output() addFriendCOmplete = new EventEmitter();

  constructor(private friendService: FriendService) {

  }

  ngOnInit() {
  }

  saveFriend($event: Friend) {
    this.friendService.addFriend($event);
    this.addFriendCOmplete.emit();
  }

}
