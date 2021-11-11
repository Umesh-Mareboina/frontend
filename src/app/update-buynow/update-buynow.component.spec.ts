import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateBuynowComponent } from './update-buynow.component';

describe('UpdateBuynowComponent', () => {
  let component: UpdateBuynowComponent;
  let fixture: ComponentFixture<UpdateBuynowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateBuynowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateBuynowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
