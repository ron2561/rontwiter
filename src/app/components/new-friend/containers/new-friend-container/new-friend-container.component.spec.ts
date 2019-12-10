import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewFriendContainerComponent } from './new-friend-container.component';

describe('NewFriendContainerComponent', () => {
  let component: NewFriendContainerComponent;
  let fixture: ComponentFixture<NewFriendContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewFriendContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewFriendContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
