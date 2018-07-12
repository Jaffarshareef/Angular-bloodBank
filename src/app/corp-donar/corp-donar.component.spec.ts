import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CorpDonarComponent } from './corp-donar.component';

describe('CorpDonarComponent', () => {
  let component: CorpDonarComponent;
  let fixture: ComponentFixture<CorpDonarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CorpDonarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CorpDonarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
