import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameCardAnimalComponent } from './game-card-animal.component';

describe('GameCardAnimalComponent', () => {
  let component: GameCardAnimalComponent;
  let fixture: ComponentFixture<GameCardAnimalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GameCardAnimalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GameCardAnimalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
