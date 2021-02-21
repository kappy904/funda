import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwoColSeventyThirtyComponent } from './two-col-seventy-thirty.component';

describe('TwoColSeventyThirtyComponent', () => {
  let component: TwoColSeventyThirtyComponent;
  let fixture: ComponentFixture<TwoColSeventyThirtyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TwoColSeventyThirtyComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TwoColSeventyThirtyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
