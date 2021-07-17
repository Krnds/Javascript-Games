import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameCardPlantComponent } from './game-card-plant.component';

describe('GameCardPlantComponent', () => {
  let component: GameCardPlantComponent;
  let fixture: ComponentFixture<GameCardPlantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GameCardPlantComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GameCardPlantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
