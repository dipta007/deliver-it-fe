import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DropUpComponent } from './drop-up.component';

describe('DropUpComponent', () => {
  let component: DropUpComponent;
  let fixture: ComponentFixture<DropUpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DropUpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DropUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
