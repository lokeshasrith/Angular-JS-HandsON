import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AiNumbersComponent } from './ai-numbers.component';

describe('AiNumbersComponent', () => {
  let component: AiNumbersComponent;
  let fixture: ComponentFixture<AiNumbersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AiNumbersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AiNumbersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
