import {Injectable} from '@angular/core';
import {Friend} from '../entities/friend';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FriendService {
  /*yogi: Friend = {
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

  yoel: Friend = new Friend(2000030, 'yoel', 30); */

  private friendsList: Friend[] = [];

  getFriendsList() {
    return this.httpClient.get('http://localhost:3000/getAllFriends');
  }

  addFriend(friend: Friend) {
    // this.friendsList.push(friend);
    this.httpClient.post('http://localhost:3000/saveFriend', {friend}, {responseType: 'text'}).subscribe((res) => {
      this.getFriendsList();
    });

  }

  deleteFriend(id: number) {
    this.httpClient.post('http://localhost:3000/deleteFriend', {friendId: id}, {responseType: 'text'}).subscribe((res) => {
      console.log(res);
    });
  }

  constructor(private httpClient: HttpClient) {
  }
}
