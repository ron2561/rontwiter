import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlParentComponent } from './fl-parent.component';

describe('FlParentComponent', () => {
  let component: FlParentComponent;
  let fixture: ComponentFixture<FlParentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlParentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
