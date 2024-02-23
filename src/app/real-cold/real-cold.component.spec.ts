import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RealColdComponent } from './real-cold.component';

describe('RealColdComponent', () => {
  let component: RealColdComponent;
  let fixture: ComponentFixture<RealColdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RealColdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RealColdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
