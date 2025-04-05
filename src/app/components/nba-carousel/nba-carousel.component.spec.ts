import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NbaCarouselComponent } from './nba-carousel.component';

describe('NbaCarouselComponent', () => {
  let component: NbaCarouselComponent;
  let fixture: ComponentFixture<NbaCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NbaCarouselComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NbaCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
