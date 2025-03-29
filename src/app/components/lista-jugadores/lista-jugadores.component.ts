import { Component } from '@angular/core';

@Component({
  selector: 'app-lista-jugadores',
  imports: [],
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
