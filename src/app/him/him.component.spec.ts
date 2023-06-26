import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HimComponent } from './him.component';

describe('HimComponent', () => {
  let component: HimComponent;
  let fixture: ComponentFixture<HimComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HimComponent]
    });
    fixture = TestBed.createComponent(HimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
