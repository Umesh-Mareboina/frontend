import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuynowListComponent } from './buynow-list.component';

describe('BuynowListComponent', () => {
  let component: BuynowListComponent;
  let fixture: ComponentFixture<BuynowListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuynowListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuynowListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
