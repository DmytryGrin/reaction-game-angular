import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactionGamesHostComponent } from './reaction-games-host.component';

describe('ReactionGamesHostComponent', () => {
  let component: ReactionGamesHostComponent;
  let fixture: ComponentFixture<ReactionGamesHostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReactionGamesHostComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactionGamesHostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
