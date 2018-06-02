import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterdetailsComponent } from './masterdetails.component';

describe('MasterdetailsComponent', () => {
  let component: MasterdetailsComponent;
  let fixture: ComponentFixture<MasterdetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MasterdetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MasterdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
