import { Component } from '@angular/core';
import { NbaCarouselComponent } from '../nba-carousel/nba-carousel.component';
import { NbaNavbarComponent } from '../nba-navbar/nba-navbar.component';

@Component({
  selector: 'app-lista-jugadores',
  imports: [NbaCarouselComponent, NbaNavbarComponent],
  templateUrl: './lista-jugadores.component.html',
  styleUrl: './lista-jugadores.component.scss'
})
export class ListaJugadoresComponent {
  // player-list.component.ts
  listaJugadores = [
    {
      imgSrc: "ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/2544.png", // Ejemplo real
      nombre: "LeBron James",
      numero: 23,
      posicion: "Ala-Pívot",
      estadisticas: "27.4 PTS, 8.5 REB, 8.3 AST",
      nombreDelEquipo: "Los Angeles Lakers"
    },
    // Añade más jugadores con URLs reales
  ];
}
