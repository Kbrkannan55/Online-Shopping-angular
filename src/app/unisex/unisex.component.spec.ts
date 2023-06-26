import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnisexComponent } from './unisex.component';

describe('UnisexComponent', () => {
  let component: UnisexComponent;
  let fixture: ComponentFixture<UnisexComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UnisexComponent]
    });
    fixture = TestBed.createComponent(UnisexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
