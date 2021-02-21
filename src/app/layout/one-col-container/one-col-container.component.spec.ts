import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OneColContainerComponent } from './one-col-container.component';

describe('OneColContainerComponent', () => {
  let component: OneColContainerComponent;
  let fixture: ComponentFixture<OneColContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OneColContainerComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OneColContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
