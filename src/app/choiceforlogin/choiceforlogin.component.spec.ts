import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChoiceforloginComponent } from './choiceforlogin.component';

describe('ChoiceforloginComponent', () => {
  let component: ChoiceforloginComponent;
  let fixture: ComponentFixture<ChoiceforloginComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChoiceforloginComponent]
    });
    fixture = TestBed.createComponent(ChoiceforloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
