import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NbaNavbarComponent } from './nba-navbar.component';

describe('NbaNavbarComponent', () => {
  let component: NbaNavbarComponent;
  let fixture: ComponentFixture<NbaNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NbaNavbarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NbaNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
