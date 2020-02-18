import {Component, OnInit} from '@angular/core';
import {FriendService} from './services/friend.service';
import {Friend} from './entities/friend';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    this.getFriendsUpDateList()
  }

  getFriendsUpDateList(){
    this.friendService.getFriendsList().subscribe((res) => {
      this.friendsList= res as Friend[];
    });
  }

  friendsList: Friend[];

  constructor(private friendService: FriendService) {
  }

  addFriendComplete() {
    this.friendService.getFriendsList().subscribe((res) => {
      this.friendsList= res as Friend[];
    });
  }
  title = 'rontwiter';
}
