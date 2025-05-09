import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CricketPlayersComponent } from './cricket-players.component';

describe('CricketPlayersComponent', () => {
  let component: CricketPlayersComponent;
  let fixture: ComponentFixture<CricketPlayersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CricketPlayersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CricketPlayersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
