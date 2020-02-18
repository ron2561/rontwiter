import {Component, Input, OnInit} from '@angular/core';
import {Friend} from '../../entities/friend';
import {FriendService} from '../../services/friend.service';
import { FriendlistComponent } from '../friendlist/friendlist.component';

@Component({
  selector: 'app-fl-parent',
  templateUrl: './fl-parent.component.html',
  styleUrls: ['./fl-parent.component.css']
})
export class FlParentComponent implements OnInit {

  @Input() friendsList: Friend[];
  friendNameFilter = '';
  searchOption: any;

  constructor(private friendService: FriendService) {
  }

  ngOnInit() {
    // this.getFriendsUpDateList()
  }

  getCurrentFriends() {
    if (this.friendsList && this.friendNameFilter === '') {
      return this.friendsList;
    } else {
      return this.getFilteredFriends();
    }

    // console.log(this.searchOption);
    // return this.friendsList.filter((friend) => friend.name === this.friendNameFilter);
  }

  getFilteredFriends() {
    switch (this.searchOption) {
      case ('name'):

        return this.friendsList.filter((friend) => friend.name === this.friendNameFilter);
        break;

      case ('age'):
        return this.friendsList.filter((friend) => friend.age === +this.friendNameFilter);
        break;
      case ('id'):
        return this.friendsList.filter((friend) => friend.id === +this.friendNameFilter);
        break;
    }

  }
  resetFNF() {
    this.friendNameFilter = '';
  }
  // getFriendsUpDateList(){
  //   this.friendService.getFriendsList().subscribe((res) => {
  //     this.friendsList= res as Friend[];
  //   });
  // }
 







}
