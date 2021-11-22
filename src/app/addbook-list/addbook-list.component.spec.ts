import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddbookListComponent } from './addbook-list.component';

describe('AddbookListComponent', () => {
  let component: AddbookListComponent;
  let fixture: ComponentFixture<AddbookListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddbookListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddbookListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
