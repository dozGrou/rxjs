import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PipeOrderComponent } from './pipe-order.component';

describe('PipeOrderComponent', () => {
  let component: PipeOrderComponent;
  let fixture: ComponentFixture<PipeOrderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PipeOrderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PipeOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
