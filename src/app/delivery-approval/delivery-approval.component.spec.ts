import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliveryApprovalComponent } from './delivery-approval.component';

describe('DeliveryApprovalComponent', () => {
  let component: DeliveryApprovalComponent;
  let fixture: ComponentFixture<DeliveryApprovalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeliveryApprovalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeliveryApprovalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
