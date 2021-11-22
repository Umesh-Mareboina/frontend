import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateAddbookComponent } from './update-addbook.component';

describe('UpdateAddbookComponent', () => {
  let component: UpdateAddbookComponent;
  let fixture: ComponentFixture<UpdateAddbookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateAddbookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateAddbookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
