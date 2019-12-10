import {AfterViewInit, Component, ElementRef, EventEmitter, OnInit, Output, ViewChild,} from '@angular/core';
import {Friend} from '../../../../entities/friend';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-new-friend',
  templateUrl: './new-friend.component.html',
  styleUrls: ['./new-friend.component.scss', '../../../friendlist/friendlist.component.css']
})
export class NewFriendComponent implements AfterViewInit {

  name: string;
  age: number;
  gender: string;
  id: number;

  @Output()
  newFriend = new EventEmitter<Friend>();

  @ViewChild('ids', {static: false}) idsView: ElementRef;
  @ViewChild('genders', {static: false}) gendersView: ElementRef;
  @ViewChild('names', {static: false}) namesView: ElementRef;
  @ViewChild('ages', {static: false}) agesView: ElementRef;
  private newFriendsForm: FormGroup;

  constructor( private formBuilder: FormBuilder) {
    this.newFriendsForm = formBuilder.group({
      name: '', age: '', gender: '', id: ''
    });
  }

  onSubmit(friendData: any) {
    const friend: Friend = new Friend(friendData.id, friendData.name, friendData.age);
    this.newFriend.emit(friend);
    // this.resetFriendFields();
    this.newFriendsForm.reset();
  }
  /*
  resetFriendFields() {
    this.id = null;
    this.name = null;
    this.age = null;
    this.gender = null;
  }
  checkIfFriendValid() {
    return this.agesView && this.agesView.nativeElement.classList.contains('ng-invalid') ||
      this.namesView && this.namesView.nativeElement.classList.contains('ng-invalid') ||
      this.idsView && this.idsView.nativeElement.classList.contains('ng-invalid') ||
      this.gendersView && this.gendersView.nativeElement.classList.contains('ng-invalid');
  }
*/
  ngAfterViewInit() {

  }

}
