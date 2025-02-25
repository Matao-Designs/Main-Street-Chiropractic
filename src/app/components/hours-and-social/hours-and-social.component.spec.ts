import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { HoursAndSocialComponent } from './hours-and-social.component';

describe('HoursAndSocialComponent', () => {
  let component: HoursAndSocialComponent;
  let fixture: ComponentFixture<HoursAndSocialComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ HoursAndSocialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HoursAndSocialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
