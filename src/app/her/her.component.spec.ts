import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HerComponent } from './her.component';

describe('HerComponent', () => {
  let component: HerComponent;
  let fixture: ComponentFixture<HerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HerComponent]
    });
    fixture = TestBed.createComponent(HerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
