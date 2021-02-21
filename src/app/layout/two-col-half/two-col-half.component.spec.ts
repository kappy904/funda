import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwoColHalfComponent } from './two-col-half.component';

describe('TwoColHalfComponent', () => {
  let component: TwoColHalfComponent;
  let fixture: ComponentFixture<TwoColHalfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TwoColHalfComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TwoColHalfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
