import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuynowDetailsComponent } from './buynow-details.component';

describe('BuynowDetailsComponent', () => {
  let component: BuynowDetailsComponent;
  let fixture: ComponentFixture<BuynowDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuynowDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuynowDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
