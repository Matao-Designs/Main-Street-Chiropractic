import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ConditionsWeTreatComponent } from './conditions-we-treat.component';

describe('ConditionsWeTreatComponent', () => {
  let component: ConditionsWeTreatComponent;
  let fixture: ComponentFixture<ConditionsWeTreatComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ConditionsWeTreatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConditionsWeTreatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
