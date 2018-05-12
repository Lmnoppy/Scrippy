import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventpageComponent } from './eventpage.component';

describe('EventpageComponent', () => {
  let component: EventpageComponent;
  let fixture: ComponentFixture<EventpageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventpageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
