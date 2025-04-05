import { Component } from '@angular/core';

@Component({
  selector: 'app-nba-carousel',
  imports: [],
  standalone: true,
  templateUrl: './nba-carousel.component.html',
  styleUrls: ['./nba-carousel.component.scss']
})
export class NbaCarouselComponent {
  slides = [
    {
      image: 'assets/imgs/carousel1.jpg',
      alt: 'Jugadores NBA destacados'
    },
    {
      image: 'assets/imgs/carousel2.jpg',
      alt: 'Momento destacado del partido'
    },
    {
      image: 'assets/imgs/carousel3.jpg',
      alt: 'Estadio NBA'
    }
  ];
}