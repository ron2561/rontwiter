import { Injectable } from '@angular/core';
import {Friend} from '../entities/friend';

@Injectable({
  providedIn: 'root'
})
export class FriendService {
  yogi: Friend = {
    age: 20,
    gender: {
      isMale: true,
      isFemale: false
    },
    id: 20003030,
    name: 'yogi',
    isAlive: true
  };

  moshe: Friend = {
    age: 25,
    gender: {
      isMale: true,
      isFemale: false
    },
    id: 20003630,
    name: 'moshe',
    isAlive: true
  };

  eran: Friend = {
    age: 28,
    gender: {
      isMale: true,
      isFemale: false
    },
    id: 29003030,
    name: 'eran',
    isAlive: true
  };

  yoel: Friend = new Friend(2000030, 'yoel', 30);

  private friendsList: Friend[] = [this.moshe, this.eran, this.yogi, this.yoel];

  getFriendsList() {
    return this.friendsList;
  }

  addFriend(friend: Friend) {
    this.friendsList.push(friend);
  }

  constructor() { }
}
