import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DonationTipsComponent } from './donation-tips.component';

describe('DonationTipsComponent', () => {
  let component: DonationTipsComponent;
  let fixture: ComponentFixture<DonationTipsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DonationTipsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DonationTipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
